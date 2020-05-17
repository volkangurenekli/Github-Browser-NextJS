import React from 'react'

const XMain = () => {
  return (
    <main>
      <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6  ">
          <img src="logo.png" alt="Github Browser" />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex-1 text-black-100 text-xl text-center  p-1 m-1">
          <h1 className="title">Welcome to GitHub Browser</h1>
        </div>
      </div>
    </main>
  )
}

export default XMain
