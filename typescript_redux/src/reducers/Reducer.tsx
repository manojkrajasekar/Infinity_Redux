import { ActionTypes } from './ActionTypes';
import { TypeKeys } from '../actions/TypeKeys';

// const price_values: number[];
export const Reducer = (state: object[], action: ActionTypes) => {
    switch (action.type) {
        case TypeKeys.ADD_DATA:
            // return [
                
            //     action.price
            // ];
            return {
                ...state, price: action.price
            };
        default:
            return state;
    }
};
