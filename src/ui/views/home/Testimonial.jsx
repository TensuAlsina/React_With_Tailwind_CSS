import React from 'react'

const Testimonial = ({imgRef,userName,testimonial}) => {
  return (
    <div
            className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
          >
            <img src={imgRef} className="w-16 -mt-14" alt="" />
            <h5 className="text-lg font-bold">{userName}</h5>
            <p className="text-sm text-darkGrayishBlue">
             {testimonial}
            </p>
          </div>

  )
}

export default Testimonial