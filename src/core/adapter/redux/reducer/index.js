import { combineReducers } from 'redux';
import friendReducer from './friend';

export default combineReducers({
  friends: friendReducer,
});