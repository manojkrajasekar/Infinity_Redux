import { createStore } from 'redux';
import { sortDataByAsc, sortDataByDesc } from './actions/sortDataActions';
import { sortDataReducer } from './reducers/sortDataReducer';

const store = createStore(sortDataReducer);

store.dispatch(sortDataByAsc('rank', 'ASC'));
console.log(store.getState());

store.dispatch(sortDataByDesc('rank', 'DESC'));
console.log(store.getState());








