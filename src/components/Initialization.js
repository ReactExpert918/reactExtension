import React from 'react';
import { useDispatch } from 'react-redux';
import { setInitialized, setSecret } from '../actions/extensionActions';
import Button from '../common/Button';

function Initialization() {
  const dispatch = useDispatch();

  const generateSecret = () => {
    const length = 16;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    dispatch(setSecret(result));
    dispatch(setInitialized(true));
  };

  return (
    <div id="initialize" className='container'>
      <h3>Welcome to the Extension</h3>
      <label for="Generate_Secret">Generate Secret:</label>
      <Button onClick={ generateSecret } value="Generate Secret" />
    </div>
  );
}

export default Initialization;
