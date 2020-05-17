/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import * as githubActions from '../redux/actions/githubActions'
import Card from '../components/Card'
import Head from '../components/Head'
import SearchBar from '../components/SearchBar'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import _ from 'lodash'

const Home = props => {
  const [value, setValue] = useState('')
  const [searchQuery, setSearchQuery] = useState({})

  const _onChange = value => {
    setValue(value)
    const search = _.debounce(sendQuery, 500)
    setSearchQuery(prevSearch => {
      if (prevSearch.cancel) {
        prevSearch.cancel()
      }
      return search
    })
    search(value)
  }

  const sendQuery = value => {
    props.actions.getUsers(value)
  }

  const _onClick = item => {
    props.actions.getUserData(item)
    props.actions.getUserFollowing(item)
    props.actions.getUserFollowers(item)
    props.actions.getUserRepos(item)
  }
  return (
    <div className="w-full ">
      <Navbar />
      <Head />
      <Main />
      <SearchBar
        value={value}
        onChange={e => _onChange(e.target.value)}
        onSearch={() => sendQuery(value)}
      />
      <div className="flex-1 text-gray-700 text-center px-4 py-2 m-2">
        {props.users.length > 0
          ? props.users.map((user, index) => (
              <Link href="detail" key={index}>
                <Card
                  name={user.login}
                  image={user.avatar_url}
                  onClick={() => _onClick(user.login)}
                />
              </Link>
            ))
          : null}
      </div>
      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({
  users: state.getUsersReducer,
})

const mapDispacthToProps = dispatch => {
  return {
    actions: {
      getUsers: bindActionCreators(githubActions.getUsers, dispatch),
      getUserData: bindActionCreators(githubActions.getUserData, dispatch),
      getUserFollowing: bindActionCreators(
        githubActions.getUserFollowing,
        dispatch
      ),
      getUserFollowers: bindActionCreators(
        githubActions.getUserFollowers,
        dispatch
      ),
      getUserRepos: bindActionCreators(githubActions.getUserRepos, dispatch),
    },
  }
}
export default connect(
  mapStateToProps,
  mapDispacthToProps
)(Home)
