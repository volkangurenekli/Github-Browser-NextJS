import React, { useState } from 'react'
import { Modal, Button } from 'antd'
import { GITHUB_LOGO } from '../../constants'

const XModal = props => {
  const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true)
  }

  const handleOk = () => {
    setVisible(false)
  }

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        {props.children}
      </Button>
      <Modal
        visible={visible}
        title={props.children}
        onCancel={handleOk}
        onOk={handleOk}
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            OK
          </Button>,
        ]}
      >
        <div className="m-1 p-1">
          {props.data && props.data.length > 0
            ? props.data.map((item, index) => (
                <div
                  key={index}
                  className="m-1 p-1 rounded-lg bg-blue-100 hover:bg-blue-500 cursor-pointer	"
                  onClick={() => window.open(item.html_url)}
                >
                  <div className="flex items-center justify-start h-10">
                    <div className="flex-1 text-gray-700 text-center px-4 py-2 m-2 ml-10 ">
                      <img
                        className="w-10 h-10 rounded-full"
                        src={item.avatar_url || GITHUB_LOGO}
                        alt={''}
                      />
                    </div>
                    <div className="flex-1 text-gray-700  px-4 py-2 m-2">
                      <p className=" text-sm  text-gray-900 mt-3 leading-none">
                        {item.login}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </Modal>
    </div>
  )
}

export default XModal
