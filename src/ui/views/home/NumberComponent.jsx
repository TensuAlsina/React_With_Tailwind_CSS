import React from 'react'

const NumberComponent = ({number,title,paragraphToShow}) => {
  return (
    <div
    className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
  >
    
    <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
      <div className="flex items-center space-x-2">
        <div
          className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
        >
          {number}
        </div>
        <h3 className="text-base font-bold md:mb-4 md:hidden">
         {title}
        </h3>
      </div>
    </div>

    <div>
      <h3 className="hidden mb-4 text-lg font-bold md:block">
        {title}
      </h3>
      <p className="text-darkGrayishBlue">
      {paragraphToShow}
      </p>
    </div>
  </div>
  );
}

export default NumberComponent

// Track Company-wide progress

// See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.
