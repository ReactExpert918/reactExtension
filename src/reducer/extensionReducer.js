const initialState = {
    initialized: false,
    loggedIn: false,
    secret: '',
    password: '',
  };
  
  const extensionReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_INITIALIZED':
        return { ...state, initialized: action.payload };
      case 'SET_LOGGED_IN':
        return { ...state, loggedIn: action.payload };
      case 'SET_SECRET':
        return { ...state, secret: action.payload };
      case 'SET_PASSWORD':
        return { ...state, password: action.payload };
      default:
        return state;
    }
  };
  
  export default extensionReducer;