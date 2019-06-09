import React from 'react';
import { connect } from 'react-redux';

import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import { FetchTasks } from '../redux/domain/Task/TaskActions';

const Main = ({ fetchTasks }) => (
  <div>
    <TaskList />
    <AddTaskForm />
    <button onClick={fetchTasks}> Fetch Tasks </button>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTasks: () => dispatch(FetchTasks())
  }
}

export default connect(null, mapDispatchToProps)(Main);
