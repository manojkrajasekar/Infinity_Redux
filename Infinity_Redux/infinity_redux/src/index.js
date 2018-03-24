import { createStore, combineReducers } from 'redux';
import { AddData, SortData } from './actions/Data';
import { AddDataReducer, SortDataReducer } from './reducers/DataReducer';
import data from './model/CoinsData.json';

const rootReducer = combineReducers({
    AddDataReducer,
    SortDataReducer
});

const store = createStore(rootReducer);

data.map((elem) => {(
        store.dispatch(AddData({price: elem.price_usd}))
    )}
);

const price_Data = store.getState();

data.map((elem) => {(
    store.dispatch(SortData({price_Data: elem.price_usd}))
    )}
);

console.log(store.getState());


