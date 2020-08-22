// const { createStore } = require("redux");

import {createStore, combineReducers} from 'redux';
import profileReducer from './profileReducer';
import dialogsReduser from './dialogsReduser';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer ';


let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReduser,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);


export default store;