import { ALL, CURRENT, COMPLETED, SEL_FILTER_VALUE, } from './settingsActions';

const settingsReducer = (state = { filterBy: ALL }, { type, payload }) => {
  switch (type) {
    case SEL_FILTER_VALUE: {
      return { ...state, filterBy: payload };
    }
  }

  return state;
}

export default settingsReducer;