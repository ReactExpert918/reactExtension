import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedIn } from '../actions/extensionActions';
import Button from '../common/Button';
import Input from '../common/Input';

function Login() {
  const [inputPassword, setInputPassword] = useState('');
  const [error, setError] = useState('');
  const storedPassword = useSelector((state) => state.extension.password);
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Compare input password with the stored password.
    if (inputPassword === storedPassword) {
      dispatch(setLoggedIn(true));
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div className='container'>
      <h3>Login</h3>
      <label for="login-password">Password:</label>
      <Input 
        type="password"
        placeholder="Password"
        value={inputPassword}
        onChange={(e) => setInputPassword(e.target.value)}
      />
      <Button onClick={ handleLogin } value="Login" />
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
