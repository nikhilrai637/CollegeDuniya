import React from 'react'
import College1  from './college_01.jpg'
import College2   from './college_02.jpg'
function collegeCard({college , index}) {
    
    return (
        <div>
            {console.log("Calling College Card" ,    index )}
            <h1>{college.college_name}</h1>
            <h2>{college.amenties}</h2>
            {console.log(index)}
           {index%2 === 0 
           ?  <img src = {College1}/>
           : <img src = {College2}/> 
           }
        </div>
    )
}

export default collegeCard
