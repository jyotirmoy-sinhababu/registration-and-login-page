import './auth.css';
import { Outlet } from 'react-router-dom';

const Auth = ({ children }) => {
  return (
    <div className='container'>
      <Outlet />
    </div>
  );
};
export default Auth;
