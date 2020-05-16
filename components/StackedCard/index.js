import React from 'react'
import Modal from '../Modal'

const StackedCard = props => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={
          props.image ||
          'https://ya-webdesign.com/transparent250_/no-image-png-1.png'
        }
        alt="image"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.name}</div>
        {props.company !== null && (
          <p className="text-gray-700 text-base">Company: {props.company}</p>
        )}
        {props.bio !== null && (
          <p className="text-gray-700 text-base">Biography: {props.bio}</p>
        )}
        {props.created_at !== null && (
          <p className="text-gray-700 text-base">
            Created At:
            {new Date(Date.parse(props.created_at)).toUTCString()}
          </p>
        )}
        {props.email !== null && (
          <p className="text-gray-700 text-base">Email: {props.email}</p>
        )}

        <p className="text-gray-700 text-base">
          followers_url={props.followers_url}
          <br />
          following_url={props.following_url}
          public_repos
        </p>
      </div>
      <div className="flex justify-around">
        <Modal>Followers: {props.followers}</Modal>
        <Modal>Following: {props.following}</Modal>
        <Modal>Repositories: {props.public_repos}</Modal>
      </div>
    </div>
  )
}

export default StackedCard