import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as githubActions from '../redux/actions/githubActions'
import Card from '../components/Card'
import Head from '../components/Head'
import Form from '../components/Form'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = props => {
  const [value, setValue] = useState('')

  useEffect(() => {
    //  props.actions.getUsers('volkan')
  }, [])

  const _onChange = e => {
    setValue(e.target.value)
    e.preventDefault()
  }

  const _onSubmit = () => {
    props.actions.getUsers(value)
    setValue('')
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
      <Form value={value} onChange={e => _onChange(e)} onClick={_onSubmit} />
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
  userData: state.userDataReducer,
  userFollowing: state.userFollowingReducer,
  userFollowers: state.userFollowersReducer,
  userRepos: state.userReposReducer,
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
