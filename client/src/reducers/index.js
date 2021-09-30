import { combineReducers } from "redux";
import posts from './posts'
import authReducer from '../reducers/auth'
export default combineReducers({
  posts, authReducer
})