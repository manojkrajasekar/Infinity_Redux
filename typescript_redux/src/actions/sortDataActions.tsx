import { SortDataActionType } from '../types/sortData/sortDataActionType';
import { sortDataTypeConstants } from '../common/sortDataTypeConstants';

export const sortDataByAsc = (columnId: string, order: string): SortDataActionType => {
    return {
        type: sortDataTypeConstants.SORT_DATA_BY_ASC,
        payload :{
            columnId,
            order
        }
        
    };
};

export const sortDataByDesc = (columnId: string, order: string): SortDataActionType => {
    return {
        type: sortDataTypeConstants.SORT_DATA_BY_DESC,
        payload :{
            columnId,
            order
        }
    };
};

