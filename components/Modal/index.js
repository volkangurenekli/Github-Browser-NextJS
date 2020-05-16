import React from 'react'
import { GITHUB_LOGO } from '../../constants'
import Card from '../Card'

const Modal = props => {
  const toggleModal = () => {
    const modal = document.querySelector('.modal')
    modal.classList.toggle('opacity-0')
    modal.classList.toggle('pointer-events-none')
  }
  return (
    <div>
      <div className="max-w-md ">
        <button
          onClick={() => toggleModal()}
          className="modal-button bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded-full "
        >
          {props.children}
        </button>
      </div>
      <div className="modal opacity-0 pointer-events-none absolute w-full h-full top-0 left-0 flex items-center justify-center">
        <div
          onClick={() => toggleModal()}
          className="modal-overlay absolute w-full h-full bg-black opacity-50 top-0 left-0 cursor-pointer"
        ></div>
        <div className="absolute w-190 h-190 bg-white rounded-sm shadow-lg  text-sm">
          <div className="flex flex-wrap">
            {props.data && props.data.length > 0
              ? props.data.map((item, index) => (
                  <Card
                    key={index}
                    name={item.login}
                    image={item.avatar_url || GITHUB_LOGO}
                    onClick={() => window.open(item.html_url)}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
