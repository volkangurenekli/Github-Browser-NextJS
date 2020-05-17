import React from 'react'

const Form = ({ onChange, onClick, value }) => {
  return (
    <form className="flex-1 text-gray-700 text-center px-32 py-2 m-2">
      <div className="flex items-center border-b border-b-2 border-blue-500 ">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Type Username"
          aria-label="Full name"
          onChange={onChange}
          value={value}
        />
        <button
          className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 m-1 rounded"
          type="button"
          onClick={onClick}
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default Form
