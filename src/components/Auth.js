import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { login, logout } from '../redux/user';

import './Styles/Auth.css';

export default function Auth() {
  const user = useSelector((state) => state.user.value);
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  return (
    <div className={'auth_container ' + (!user.username ? 'login' : '')}>
      {!user.username ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(login({ username }));
          }}
        >
          <div className='input-field'>
            <label htmlFor='username'>username:</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder='username...'
              type='text'
              required
            />
          </div>

          <button className='btn-primary'>Login</button>
        </form>
      ) : (
        <div className='input-field'>
          <label>
            username: <i>{user?.username}</i>
          </label>

          <button
            onClick={() => {
              dispatch(logout());
            }}
            className='btn-primary'
          >
            logout
          </button>
        </div>
      )}
    </div>
  );
}
