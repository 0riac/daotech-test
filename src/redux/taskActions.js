export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS';
export const IN_PROCESS_TASK = 'IN_PROCESS_TASK';
export const DONE_TASK = 'DONE_TASK';
export const EDITING = 'EDITING';

export const addTask = ({ taskName }) => {
  return { 
    type: ADD_TASK,
    payload: { taskName }
  };
};

export const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    payload: { id }
  };
};

export const changeTaskStatus = (id) => {
  return {
    type: CHANGE_TASK_STATUS,
    payload: { id }
  };
};

