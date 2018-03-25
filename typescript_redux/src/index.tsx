import { createStore } from 'redux';
import { AddData } from './actions/AddData';
import { Reducer } from './reducers/Reducer';
import CoinDetail from './components/types/CoinDetail';
const data = require('./model/CoinsData.json');

const store = createStore(Reducer);

// const priceData = [9, 8, 7, 88];
// priceData.map((price) => {(
//       store.dispatch((AddData(priceData)))
//     );
//   }
// );

data.map((price:CoinDetail) => {(
      store.dispatch((AddData(price.price_usd)))
    );
  }
);

console.log(store.getState());



