import React, { useContext } from 'react';
import {Context } from '../context/userContext/Context';
import userAvator from '../images/userAvatar.png';
import './profile.css'
const Profile = () => {
  const { user } = useContext(Context); 

  return (
    
      <div className="profile-container">
        <div className='profile-content'>
        <div className="user-Details">
                <img className='userAvator-img' src={userAvator} alt="no_pic" />
                <h4>Name: {user.username}</h4>
                <p>Id: {user.id}</p>
                <p>Email: {user.email}</p>
            </div>
       
    
    
        </div>
      
    </div>
    
    
  );
};

export default Profile;
