import React from 'react';
import { connect } from 'react-redux';

import { AddTask } from '../redux/domain/Task/TaskActions';

class AddTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  onChangeTitle = (event) => {
    this.setState({ title: event.target.value });
  }

  onSubmit = (event) => {
    const { title } = this.state;
    if (title) {
      this.props.addTask(title)
      this.setState({
        title: ''
      });
    }
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <input type='text' value={title} onChange={this.onChangeTitle} />
        <button onClick={this.onSubmit}> Submit </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (title) => dispatch(AddTask({
      id: Math.random() * 100 + 2,
      title
    }))
  };
}

export default connect(null, mapDispatchToProps)(AddTaskForm);
