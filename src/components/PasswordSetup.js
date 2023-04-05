import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPassword } from '../actions/extensionActions';
import Button from '../common/Button';
import Input from '../common/Input';

function PasswordSetup() {
  const [password, setPasswordInput] = useState('');
  const [passwordConfirm, setPasswordConfirmInput] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (password === passwordConfirm) {
      // Encrypt and store the password securely.
      dispatch(setPassword(password));
    } else {
      setError('Passwords do not match');
    }
  };

  return (
    <div className='container'>
      <h3>Set Password</h3>
      <label for="password">Password:</label>
      <Input 
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPasswordInput(e.target.value)}
      />
      <label for="confirm-password">Confirm Password:</label>
      <Input 
        type="password"
        placeholder="Confirm Password"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirmInput(e.target.value)}
      />
      <Button onClick={ handleSubmit } value="Submit" />
      {error && <p>{error}</p>}
    </div>
  );
}

export default PasswordSetup;
