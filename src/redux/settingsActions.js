export const ALL = 1;
export const COMPLETED = 2;
export const CURRENT = 3;
export const SEL_FILTER_VALUE = 'SEL_FILTER_VALUE';

export const setFilterValue = (value) => {
  return {
    type: SEL_FILTER_VALUE,
    payload: value
  };
};
