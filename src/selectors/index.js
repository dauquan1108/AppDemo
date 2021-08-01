import {createSelector} from 'reselect';

const keyWord = (state, active) => active;
const getTodo = (state, active) => state.DataApp;

export const getCountTodoActive = createSelector([getTodo], todo => {
  const countTodo = todo.filter(item => !item.status).length;
  return countTodo;
});

export const getVisibleTodo = createSelector(
  [keyWord, getTodo],
  (visibilityFilter, todo) => {
    switch (visibilityFilter) {
      case 'All':
        return todo;
      case 'Active':
        return todo.filter(item => item.status);
      case 'Completed':
        return todo.filter(item => !item.status);
    }
  },
);
