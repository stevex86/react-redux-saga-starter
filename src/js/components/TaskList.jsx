import React from 'react';
import { connect } from 'react-redux';

const taskRow = ({ id, title }) => (
  <li key={id}> {title} </li>
)

const TaskList = ({ tasksById }) => {
  const taskRows = Object.values(tasksById).map(taskRow);
  return (
    <ul>
      {taskRows}
    </ul>
  )
};

const mapStateToProps = (state) => {
  return {
    tasksById: state.task.tasksById
  };
}

export default connect(mapStateToProps)(TaskList);
