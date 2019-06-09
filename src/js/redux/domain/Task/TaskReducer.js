const initialState = {
  tasksById: {}
};

const addTask = (state, action) => {
  if (state.tasksById[action.task.id]) {
    return state;
  }

  return {
    ...state,
    tasksById: {
      ...state.tasksById,
      [action.task.id]: action.task
    }
  }
};

const createTasksById = (tasks) => {
  return tasks.reduce(
    (acc, task) => {
      acc[task.id] = task;
      return acc;
    },
    {}
  );
};

const tasksLoaded = (state, action) => {
  return {
    ...state,
    tasksById: createTasksById(action.tasks)
  }
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TASK':
      return addTask(state, action);
    case 'TASKS_LOADED':
      return tasksLoaded(state, action);
    default:
      return state;
  }
};
