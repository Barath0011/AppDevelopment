import React from 'react';
import { NavLink } from 'react-router-dom';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';

const SignedInLink = () => {
  return (
    <ul className='right'>
      <li><NavLink to='/que'>Dashboard</NavLink></li>
      <li><NavLink to='/policy'>Policy</NavLink></li> {/* Add Policy NavLink */}
      <li>
        {/* Add any other content you want here */}
      </li>
      <li><NavLink to='/'>LogOut</NavLink></li>
    </ul>
  );
}

export default SignedInLink;
