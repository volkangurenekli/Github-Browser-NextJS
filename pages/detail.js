import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as githubActions from '../redux/actions/githubActions'

const Detail = props => {
  console.log('VOLKAN: props', props)

  return <div>aa</div>
}

const mapStateToProps = state => ({
  users: state.getUsersReducer,
  userData: state.userDataReducer,
  userFollowing: state.userFollowingReducer,
  userFollowers: state.userFollowersReducer,
  userRepos: state.userRepoReducer,
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
)(Detail)
