import React from 'react'
import { connect } from 'react-redux'
import StackedCard from '../components/StackedCard'
import Card from '../components/Card'
import { GITHUB_LOGO } from '../constants'
import Navbar from '../components/Navbar'

const Detail = props => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="flex flex-wrap items-start justify-between bg-gray-100">
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
        <div className="w-full sm:w-1/1 md:w-1/1 lg:w-2/3 xl:w-2/3 bg-gray-100 ">
          <div className="flex items-start h-24">
            <h1 className="flex-1 text-gray-700 text-center text-xl px-4 py-2 my-2 font-black">
              Repositories
            </h1>
          </div>

          <div className="flex-1 text-gray-700 text-center -mt-12">
            {props.userRepos.length > 0
              ? props.userRepos.map(repo => (
                  <Card
                    key={repo.id.toString()}
                    name={repo.name}
                    image={GITHUB_LOGO}
                    onClick={() => window.open(repo.svn_url)}
                    stargazers_count={repo.stargazers_count}
                    forks_count={repo.forks_count}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  userData: state.userDataReducer,
  userFollowing: state.userFollowingReducer,
  userFollowers: state.userFollowersReducer,
  userRepos: state.userReposReducer,
})

export default connect(mapStateToProps)(Detail)
