import { combineReducers } from 'redux';
import extensionReducer from './extensionReducer';

const rootReducer = combineReducers({
  extension: extensionReducer,
});

export default rootReducer;