import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as githubActions from '../redux/actions/githubActions'
import StackedCard from '../components/StackedCard'
import Card from '../components/Card'
import { GITHUB_LOGO } from '../constants'
import Navbar from '../components/Navbar'

const Detail = props => {
  console.log('VOLKAN: props', props)

  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap items-center justify-center">
        <StackedCard
          className="w-full sm:w-1/1 md:w-1/1 lg:w-1/3 xl:w-1/3"
          image={props.userData.avatar_url}
          name={props.userData.name}
          company={props.userData.company}
          bio={props.userData.bio}
          created_at={props.userData.created_at}
          email={props.userData.email}
          followers={props.userData.followers}
          followers_url={props.userData.followers_url}
          following={props.userData.following}
          following_url={props.userData.following_url}
          public_repos={props.userData.public_repos}
          userFollowers={props.userFollowers}
          userFollowing={props.userFollowing}
        />
        <div className="flex flex-wrap w-full sm:w-1/1 md:w-1/1 lg:w-2/3 xl:w-2/3">
          {props.userRepos.length > 0
            ? props.userRepos.map(repo => (
                <Card
                  key={repo.id.toString()}
                  name={repo.name}
                  image={GITHUB_LOGO}
                  onClick={() => window.open(repo.svn_url)}
                />
              ))
            : null}
        </div>
      </div>
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
)(Detail)
