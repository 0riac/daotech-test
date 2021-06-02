import { nanoid } from 'nanoid';
import { ADD_TASK, REMOVE_TASK, CHANGE_TASK_STATUS, IN_PROCESS_TASK, DONE_TASK } from './taskActions';

const taskReducer = (state = { taskList: [] }, { type, payload }) => {
  const { taskList } = state;

  switch (type) {
    case ADD_TASK: {
      const id = nanoid();
      return { ...state, taskList: [...taskList, { id, taskName: payload.taskName, status: IN_PROCESS_TASK }]};
    }
    case REMOVE_TASK: {
      return { ...state, taskList: taskList.filter(({ id }) => id !== payload.id ) };
    }

    case CHANGE_TASK_STATUS: {
      const task = taskList.find(({ id }) => id === payload.id);
      task.status = task.status === IN_PROCESS_TASK ? DONE_TASK : IN_PROCESS_TASK;

      return { ...state, taskList: [...taskList] };
    }
  }

  return state;
}

export default taskReducer;