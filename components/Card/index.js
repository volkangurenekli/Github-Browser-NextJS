import React from 'react'

const Card = props => {
  return (
    <button
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-blue-200 my-2 mx-1 p-2 rounded-lg	"
      onClick={props.onClick}
    >
      <div className="flex items-center">
        <img
          className="w-10 h-10 rounded-full mr-1"
          src={props.image}
          alt={'Avatar'}
        />
        <div className="text-xs">
          <p className="text-gray-900 leading-none">
            {props.name.substring(0, 14)}
          </p>
        </div>
      </div>
    </button>
  )
}

export default Card
