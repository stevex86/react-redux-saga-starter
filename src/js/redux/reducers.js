import { combineReducers } from 'redux';
import Task from './domain/Task/TaskReducer'

export default combineReducers({
  task: Task
});
