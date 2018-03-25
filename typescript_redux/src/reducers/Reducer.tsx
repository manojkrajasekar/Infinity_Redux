import { ActionTypes } from './ActionTypes';
import { TypeKeys } from '../actions/TypeKeys';

// const price_values: number[];
export const Reducer = (state: number[], action: ActionTypes) => {
    switch (action.type) {
        case TypeKeys.ADD_DATA:
            // return [
                
            //     action.price
            // ];
            return [
                ...state, action.price
            ];
        default:
            return state;
    }
};
