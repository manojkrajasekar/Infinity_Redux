import { TypeKeys } from './TypeKeys';

export interface AddDataAction {
    type: TypeKeys.ADD_DATA;
    price: number[];
}