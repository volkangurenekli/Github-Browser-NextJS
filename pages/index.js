import React, { useState, useEffect } from "react";
import Head from "next/head";
import Form from "../components/Form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as githubActions from "../redux/actions/githubActions";
import Card from "../components/Card";
function Home(props) {
  const [value, setValue] = useState("");

  useEffect(() => {
    props.actions.getUsers("volkan");
  }, []);

  const _onChange = (e) => {
    setValue(e.target.value);
    e.preventDefault();
  };

  const _onClick = () => {
    console.log(value);
    props.actions.getUsers(value);
    console.log(props);
  };

  return (
    <div className="container">
      <Head>
        <title>GitHub Browser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <img src="logo.png" alt="Github Browser" />
        <h1 className="title">Welcome to GitHub Browser</h1>
      </main>

      <Form onChange={(e) => _onChange(e)} onClick={_onClick} />

      {props.users.length > 0
        ? props.users.map((user) => (
            <Card
              key={user.id.toString()}
              name={user.login}
              image={user.avatar_url}
            />
          ))
        : null}

      <footer>
        <br></br> <br></br>
        <br></br>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.getUsersReducer,
  user: state.selectedUserReducer,
});

const mapDispacthToProps = (dispatch) => {
  return {
    actions: {
      getUsers: bindActionCreators(githubActions.getUsers, dispatch),
      selectedUser: bindActionCreators(githubActions.selectedUser, dispatch),
    },
  };
};
export default connect(mapStateToProps, mapDispacthToProps)(Home);
