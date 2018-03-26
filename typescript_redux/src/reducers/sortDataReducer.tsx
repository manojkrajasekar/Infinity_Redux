import { SortDataActionType } from '../types/sortData/sortDataActionType';
import { sortDataTypeConstants } from '../common/sortDataTypeConstants';
import TableState from '../types/TableState';

const data:TableState['data'] = [
    {
        rank: '3',
        price_usd: '996', 
    },
    {
        rank: '1',
        price_usd: '986', 
    },
    {
        rank: '2',
        price_usd: '856', 
    }, 
    {
        rank: '4',
        price_usd: '125', 
    }
];

export const sortDataReducer = (state=data, action: SortDataActionType ) => {
    switch(action.type) {
        case sortDataTypeConstants.SORT_DATA_BY_ASC:
            return [
                    ...state
                ].sort((a:object, b:object) => {
                    const columnValue = action.payload.columnId;
                    return a[columnValue] < b[columnValue] ? -1:1;
                });
         case sortDataTypeConstants.SORT_DATA_BY_DESC:
            return [
                 ...state
                ].sort((a:object, b:object) => {
                        const columnValue = action.payload.columnId;
                        return a[columnValue] < b[columnValue] ? 1:-1;
                });
        default:
            return state;
    }
};
