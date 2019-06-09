export const AddTask = (task) => {
  return {
    type: 'ADD_TASK',
    task
  }
};

export const TasksLoaded = (tasks) => {
  return {
    type: 'TASKS_LOADED',
    tasks
  }
};

export const FetchTasks = () => {
  return {
    type: 'FETCH_TASKS'
  };
};
