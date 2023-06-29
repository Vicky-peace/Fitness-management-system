import React, { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import { Context } from '../context/userContext/Context';
import { apiDomain } from '../Utils/Utils';
import {AiFillDelete,AiFillEdit} from 'react-icons/ai';
import './members.css';


const Members = () => {
  const {user} = useContext(Context)
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
      await Axios.get(`${apiDomain}/users`,{
      headers: {
        Authorization: `${user.token}`,
      },
    })
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      })
        
       
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const deleteUser = async (id) => {
   await  Axios.delete(`${apiDomain}/users/${id}`,{
    headers: {
      Authorization: `${user.token}`,
    },
   })
   .then((response) => {
    console.log(response.data);
    fetchUsers();
   })
   .catch(error => {
    console.error('Error:', error);
  });
};

  const editUser = async (id, newData) => {
   await  Axios.put(`${apiDomain}/users/${id}`, newData,{
    headers: {
      Authorization: `${user.token}`,
    },
   })
      .then((response) => {
        console.log(response.data);
        fetchUsers(); // Refresh the user list after update
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="table_container">
    <table className='members_table'>
      
      <thead>
        <tr>
          <th>User ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.user_id}>
            <td>{user.user_id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
              <button onClick={() => editUser(user.user_id, { username: 'New Username', email: 'newemail@example.com' })}>
                Edit
              </button>
              <button onClick={() => deleteUser(user.user_id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Members;
