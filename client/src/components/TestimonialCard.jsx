import React from 'react'

const TestimonialCard = (props) => {
  return (
    
     
    <div className=' w-[320px] border rounded-lg p-[20px] bg-gray-100'>
       
        <div>
            <p>"{props.review}"</p>
        </div>
        <div className='flex mt-[20px] gap-[10px]'>
            <div>
                <img className="w-[50px] h-auto rounded-md"  src={"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt={props.revieweeName}/>
            </div>
            <div>
                <p>{props.revieweeName}</p>
                <p className='text-gray-400'>{props.revieweeTitle}</p>
            </div>
        </div>
    </div>
    
  )
}

export default TestimonialCard