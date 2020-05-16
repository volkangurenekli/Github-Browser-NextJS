import React, { useState } from 'react'
import { Modal, Button } from 'antd'
import { GITHUB_LOGO } from '../../constants'
import Card from '../Card'

const XModal = props => {
  const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true)
  }

  const handleOk = () => {
    setVisible(false)
  }

  return (
    <div className="h-screen">
      <Button type="primary" onClick={showModal}>
        {props.children}
      </Button>
      <Modal
        className="w-full p-4 m-4"
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
        <div className="flex flex-wrap m-4 p-10">
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
      </Modal>
    </div>
  )
}

export default XModal
