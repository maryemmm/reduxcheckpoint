// store.js
import { createStore } from 'redux';
import taskReducer from './reducers/TaskReducers';

const store = createStore(taskReducer);

export default store;
