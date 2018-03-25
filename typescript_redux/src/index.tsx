// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root') as HTMLElement
// );
// registerServiceWorker();

import { createStore } from 'redux';
import { AddData } from './actions/Data';
import { Reducer } from './reducers/Reducer';
// import data from './model/CoinsData.json';

const store = createStore(Reducer);


// const price = [6, 2, 4, 5];

const priceData = [9, 8, 7, 88];
priceData.map((price) => {(
    store.dispatch((AddData(priceData)))
  );
}
);

// store.dispatch((AddData(price)));

 // console.log(values.price.sort());

console.log(store.getState());



