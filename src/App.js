import React, { useState, useRef, useCallback } from 'react'
import useBookSearch from './useBookSearch'
import {colleges}  from './colleges'
import CollegeCard from './CollegeCard'
export default function App() {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)
  const [collegeCount , setCollegeCount] = useState(10)

  const {
    books,
    hasMore,
    loading,
    error
  } = useBookSearch(query, pageNumber)

  const observer = useRef()
  const lastBookElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
        setCollegeCount(prevcollegeCount => prevcollegeCount + 10 )
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  function handleSearch(e) {
    setQuery(e.target.value)
    setPageNumber(1)
  }

  return (
    <>    
    
    {
      colleges.map( (clg , index) => {
         
          if( index+1 <= collegeCount ){
            return(
              <div key={index} >
              <CollegeCard college = {clg} />
            </div> 
            )
          }
        
         
      })
    }
      
         
      
      <input type="text" value={query} onChange={handleSearch}></input>
      {books.map((book, index) => {
        if (books.length === index + 1) {
          return <div ref={lastBookElementRef} key={book}>{book}</div>
        } else {
          return <div key={book}>{book}</div>
        }
      })}
      {/* {console.log(colleges)} */}
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error'}</div>


    </>
  )
}

