import React from 'react'

function collegeCard({college}) {
    
    return (
        <div>
            {/* {console.log("Calling College Card" ,    college )} */}
            <h1>{college.college_name}</h1>
            <h2>{college.amenties}</h2>
        </div>
    )
}

export default collegeCard
