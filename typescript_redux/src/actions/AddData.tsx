import { DataType } from './DataType';
import { TypeKeys } from './TypeKeys';

export const AddData = (price: number): DataType => {
     return {
        type: TypeKeys.ADD_DATA,
        price
     };
};