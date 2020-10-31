import React, { useState, useRef, useCallback } from 'react'
 
import {colleges}  from './colleges'
import CollegeCard from './CollegeCard'
export default function App() {
 
  const [collegeCount , setCollegeCount] = useState(10)

   

  const observer = useRef()
  const lastCollegeElementRef = useCallback(node =>
    { 
       
      if(collegeCount >= colleges.length)
        return ;   
      if(observer.current)observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting ) {
           console.log('Visible')
          setCollegeCount(prevcollegeCount => prevcollegeCount + 10 )
        }
      })
      if (node) observer.current.observe(node)
   
    },[]) 


  
  

  return (
    <>    
    
    { 
      colleges.map( (clg , index) => {
         
          if( index < collegeCount ){
            return(
              <div key={index} >
              <CollegeCard college = {clg} />
            </div> 
            )
          }else if (index ===  collegeCount)
        return <div ref={lastCollegeElementRef} key={index}>
          <CollegeCard college = {clg} />
          </div>
        
         
      })
    }
      {console.log("collegeCount"   , collegeCount)}
         
      
      {/* <input type="text" value={query} onChange={handleSearch}></input>
      {books.map((book, index) => {
        if (books.length === index + 1) {
          return <div ref={lastBookElementRef} key={book}>{book}</div>
        } else {
          return <div key={book}>{book}</div>
        }
      })}
      {/* {console.log(colleges)} */}
      {/* <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error'}</div> */} */}


    </>
  )
}

