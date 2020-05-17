import React from 'react'

const Card = props => {
  return (
    <button
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-blue-200 my-2 mx-1 p-2 rounded-lg hover:bg-blue-300 "
      onClick={props.onClick}
    >
      <div className="flex items-center">
        <img
          className="w-10 h-10 rounded-full mr-1"
          src={props.image}
          alt={'Avatar'}
        />
        <div className="text-sm">
          <p className="text-gray-900 mt-3 ml-1 leading-none">
            {props.name.substring(0, 13).replace(/-/g, '')}
          </p>
          {props.forks_count ||
          props.stargazers_count ||
          props.forks_count < 1 ||
          props.stargazers_count < 1 ? (
            <p className="text-gray-900 mt-3 ml-1 leading-none">
              🔀 {props.forks_count} ⭐ {props.stargazers_count}
            </p>
          ) : null}
        </div>
      </div>
    </button>
  )
}

export default Card
