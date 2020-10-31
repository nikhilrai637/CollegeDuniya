import React from 'react'
import College1  from './college_01.jpg'
import College2   from './college_02.jpg'
function collegeCard({college}) {
    
    return (
        <div>
            {/* {console.log("Calling College Card" ,    college )} */}
            <h1>{college.college_name}</h1>
            <h2>{college.amenties}</h2>
            <img src = {College1} />
        </div>
    )
}

export default collegeCard
