/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

const Footer = () => {
  return (
    <footer className="flex absolute bottom-0 left-0 right-0 justify-center items-center">
      <a
        target="_blank"
        href="https://github.com/volkangurenekli/Github-Browser-NextJS"
        className="block lg:inline-block text-xs text-gray-500 hover:text-black"
      >
        This website was made by Volkan Gürenekli in 2020 using NextJS
      </a>
    </footer>
  )
}

export default Footer
