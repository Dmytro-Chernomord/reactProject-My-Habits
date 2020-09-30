import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/authOperation';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = e => setEmail(e.currentTarget.value);

  const login = useCallback(() => {
    dispatch(authOperations.registration({ email, password }));
  }, [dispatch, email, password]);

  const handlePasswordChange = e => setPassword(e.currentTarget.value);
  const handleSubmit = e => {
    e.preventDefault();
    login();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>RegisterView</h1>
      <label>
        Email{' '}
        <input
          onChange={handleEmailChange}
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          required
        />
      </label>
      <label>
        Password{' '}
        <input
          onChange={handlePasswordChange}
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          required
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
}
