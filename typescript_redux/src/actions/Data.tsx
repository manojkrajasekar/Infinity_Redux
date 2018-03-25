import { AddDataAction } from './AddDataAction';
import { TypeKeys } from './TypeKeys';

export const AddData = (price: number[]): AddDataAction => {
     return {
        type: TypeKeys.ADD_DATA,
        price
     };
};