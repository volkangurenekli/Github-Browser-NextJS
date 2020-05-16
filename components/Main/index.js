import React from 'react'

const XMain = () => {
  return (
    <main>
      <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/1 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-4 ">
          <img src="logo.png" alt="Github Browser" />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-full sm:w-1/1 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-4 ">
          <h1 className="title">Welcome to GitHub Browser</h1>
        </div>
      </div>
    </main>
  )
}

export default XMain
