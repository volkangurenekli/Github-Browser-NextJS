import React from 'react'
import { Input } from 'antd'
const { Search } = Input

const SearchBar = ({ onChange, onSearch, value }) => {
  return (
    <div className="flex items-center justify-center">
      <Search
        className="flex-1 text-gray-700 text-center px-4 py-2 m-2 "
        placeholder="Type Username"
        onSearch={onSearch}
        enterButton
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default SearchBar
