import React, { useState } from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = ({}) => {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const saveData = () => {
    localStorage.setItem('data', JSON.stringify(data));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (Object.keys(data).length == 4) {
          saveData();
          navigate('/login');
        }
      }}
      className='reg-form'
    >
      <input
        onChange={(e) => {
          handleChange(e);
        }}
        placeholder='Enter your name'
        type='text'
        name='name'
        className='reg-frm-inp'
      />
      <input
        onChange={(e) => {
          handleChange(e);
        }}
        placeholder='Enter your email'
        type='email'
        name='email'
        className='reg-frm-inp'
      />
      <input
        onChange={(e) => {
          handleChange(e);
        }}
        placeholder='Enter your phone number'
        type='tel'
        name='phone_number'
        className='reg-frm-inp'
      />
      <input
        onChange={(e) => {
          handleChange(e);
        }}
        placeholder='Enter password'
        type='password'
        name='password'
        className='reg-frm-inp'
      />
      <NavLink to='/login' className='navigate-btn' type='button'>
        Login
      </NavLink>
      <button type='submit' className='btn'>
        Sign up
      </button>
    </form>
  );
};

export default RegistrationForm;
