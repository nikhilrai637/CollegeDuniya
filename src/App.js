import React, { useState, useRef, useCallback } from 'react'
import C1  from './college_01.jpg'
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
    
    <img src =  { C1 } /> 
    { 

      colleges.map( (clg , index) => {
         
          if( index < collegeCount ){
            return(
              <div key={index} >
              <CollegeCard college = {clg} index={index} />
            </div> 
            )
          }else if (index ===  collegeCount)
        return <div ref={lastCollegeElementRef} key={index}>
          <CollegeCard college = {clg} index={index} />
          </div>
        
         
      })
    }
      {console.log("collegeCount"   , collegeCount)}
         
      
     


    </>
  )
}

