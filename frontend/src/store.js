import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import userReducer
import { userDeleteReducer, userLoginReducer } from "./reducers/userReducers";
import {
  createEventReducer,
  updateEventReducer,
} from "./reducers/eventReducers";

const reducer = combineReducers({
  // user reducers
  userLogin: userLoginReducer,
  // userDelete: userDeleteReducer,

  // events reducers
  eventCreate: createEventReducer,
  eventUpdate: updateEventReducer,
});

//get localstorage items and add to cart if not loggedIn

//get localstorage useInfo and add to userLogin if loggedIn
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
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
