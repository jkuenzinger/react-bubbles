import React, {useState} from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth.js';

const Login = (props) => {
  const [login, setLogin] = useState({
    username:'',
    password:''
  });

  const handleChanges = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('login', login)
    .then(res => {
      console.log('login res', res)
      localStorage.setItem('token', res.data.payload);
      props.history.push('/bubble-page');
    })
    .catch(error => {
      console.log(`login error: ${error}`);
    })
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='username' name='username' value={login.username} onChange={handleChanges}/>
        <input type='text' placeholder='password' name='password' value={login.password} onChange={handleChanges}/>
        <button>Login G Unit</button>
      </form>
    </>
  );
};

export default Login;
