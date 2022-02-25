import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  userListReducer,
  userLoginReducer,
  userSignupReducer,
  userUpdateReducer,
} from './reducers/userReducers';
import {
  formCreateReducer,
  formDetailsReducer,
  formListReducer,
} from './reducers/formReducers';

const reducer = combineReducers({
  formCreate: formCreateReducer,
  formList: formListReducer,
  formDetails: formDetailsReducer,
  userLogin: userLoginReducer,
  userSignup: userSignupReducer,
  userList: userListReducer,
  userUpdate: userUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
