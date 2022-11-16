import { combineReducers } from 'redux';
import auth from './auth';
import packages from './packages';
import toast from './toast';

const appReducer = combineReducers({
  auth,
  packages,
  toast,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;