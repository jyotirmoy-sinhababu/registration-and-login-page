import Auth from './Page/Auth/Auth';
import { Routes, Route } from 'react-router-dom';
import LogIn from './Component/Login/Login';
import RegistrationForm from './Component/Registration/RegistrationForm';
import User from './Component/User/User';
import { useState } from 'react';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Auth />}>
          <Route index element={<LogIn />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/reg' element={<RegistrationForm />} />
        </Route>
        <Route path='/user' element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
