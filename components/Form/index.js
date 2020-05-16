import React from 'react'

const Form = ({ onChange, onClick, value }) => {
  return (
    <form className="w-full">
      <div className="flex items-center border-b border-b-2 border-blue-500 py-2 m-4 p-4">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Type Username"
          aria-label="Full name"
          onChange={onChange}
          value={value}
        />
        <button
          className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
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
