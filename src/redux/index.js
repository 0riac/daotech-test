import { createStore, combineReducers } from 'redux';
import taskReducer from './taskReducer';
import settingsReducer from './settingsReducer';
import { nanoid } from 'nanoid';
import { ALL } from './settingsActions';

const defaultTaskList = [
  {
    id: nanoid(),
    taskName: 'Добавление новой записи',
    status: 'IN_PROCESS_TASK',
  },
  {
    id: nanoid(),
    taskName: 'Новая запись добавляет при условии, что её длина меньше N символов или равна ей',
    status: 'IN_PROCESS_TASK',
  },
  {
    id: nanoid(),
    taskName: 'Отображение списка добавленных записей',
    status: 'IN_PROCESS_TASK',
  },
  {
    id: nanoid(),
    taskName: 'Переключение статуса записи Выполнено / Невыполненный при клике на её название',
    status: 'IN_PROCESS_TASK',
  },
  {
    id: nanoid(),
    taskName: 'Фильтрация по типу (все, выполненные, текущие)',
    status: 'IN_PROCESS_TASK',
  },
  {
    id: nanoid(),
    taskName: 'Отображение счётчика выполненных и невыполненных задач',
    status: 'IN_PROCESS_TASK',
  },
  {
    id: nanoid(),
    taskName: 'Использование хранилища (Redux, Mobx)',
    status: 'IN_PROCESS_TASK',
  },
];

const localTaskList = JSON.parse(window.localStorage.getItem('task-list'));

const getInitState = ({ taskList, settings = { filterBy: ALL }}) => {
  return { tasks: { taskList: taskList || defaultTaskList }, settings };
};
const initState = getInitState({ taskList: localTaskList });

const store = createStore(combineReducers({ tasks: taskReducer, settings: settingsReducer }), initState);

const handleTaskListUpdate = (() => {
  let oldTaskList;

  return () => {
    const taskList = store.getState()?.tasks?.taskList;
    if (oldTaskList !== taskList) {
      oldTaskList = taskList;
      window.localStorage.setItem('task-list', JSON.stringify(taskList));
    }
  }
})();

store.subscribe(handleTaskListUpdate);

export default store;
