import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LogIn = ({}) => {
  const registeredData = JSON.parse(localStorage.getItem('data'));
  const [loginData, setLoginData] = useState({});
  const loginInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginData({ ...loginData, [name]: value });
  };
  const verifyData = () => {
    if (Object.keys(loginData).length == 2) {
      if (
        loginData.email === registeredData.email &&
        loginData.password === registeredData.password
      ) {
        console.log('Logged in');
      } else console.log('wrong credentials');
    }
  };
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        verifyData();
        navigate('/user');
      }}
      className='login-form'
    >
      <input
        onChange={(e) => {
          loginInput(e);
        }}
        placeholder='Enter your email'
        type='email'
        name='email'
        className='login-formInp'
      />
      <input
        onChange={(e) => {
          loginInput(e);
        }}
        placeholder='Enter password'
        type='password'
        name='password'
        className='login-formInp'
      />
      <NavLink to='/reg' className='navigate-btn'>
        sign up
      </NavLink>
      <button type='submit' className='btn'>
        Login
      </button>
    </form>
  );
};

export default LogIn;
