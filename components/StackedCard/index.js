import React from 'react'
import Modal from '../Modal/ant'
import { NO_IMAGE } from '../../constants'

const StackedCard = props => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-4">
      <img className="w-full" src={props.image || NO_IMAGE} alt="image" />
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
          Repositories: {props.public_repos}
        </p>
      </div>
      <div className="flex justify-around">
        <Modal data={props.userFollowers}>Followers: {props.followers}</Modal>
        <Modal data={props.userFollowing}>Following: {props.following}</Modal>
      </div>
    </div>
  )
}

export default StackedCard
