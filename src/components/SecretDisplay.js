import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSecret, setInitialized, setLoggedIn, setPassword } from '../actions/extensionActions';
import Button from '../common/Button';

function SecretDisplay() {
  const secret = useSelector((state) => state.extension.secret);
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const regenerateSecret = () => {
    const length = 16;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    dispatch(setSecret(result));
  };

  const resetinitilize = () => {
    dispatch(setInitialized(false));
    dispatch(setLoggedIn(false));
    dispatch(setPassword(""));
  }

  const logout = () => {
    setToggle(true);
  };

  const logoutWithoutReset = () => {
    dispatch(setLoggedIn(false));
  }

  return (
    <div className='container'>
      {
        !toggle ? (
          <>
            <h3>Your Secret</h3>
            <p>{secret}</p>
            <Button onClick={ regenerateSecret } value="Regenerate Secret" />
            <Button onClick={ logout } value="Logout" />
          </>
        ) : (
          <>
            <h3>Can you confirm?</h3>
            <Button onClick={ resetinitilize } value="Reset Initialization" />
            <Button onClick={ logoutWithoutReset } value="Logout Without reset" />
          </>
        )
      }
    </div>
  );
}

export default SecretDisplay;
