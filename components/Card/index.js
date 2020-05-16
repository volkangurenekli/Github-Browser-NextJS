import React from 'react'
import Link from 'next/link'

function Card(props) {
  return (
    <Link href={props.href}>
      <div
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500"
        onClick={props.onClick}
      >
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={props.image}
            alt={'Avatar of' + props.name}
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{props.name}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
