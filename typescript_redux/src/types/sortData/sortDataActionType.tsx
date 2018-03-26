import { sortDataTypeConstants } from '../../common/sortDataTypeConstants';
import { SortDataPayLoadType }  from '../sortData/SortDataPayLoadType';

export interface SortDataActionType {
    type: sortDataTypeConstants;
    payload: SortDataPayLoadType;
}