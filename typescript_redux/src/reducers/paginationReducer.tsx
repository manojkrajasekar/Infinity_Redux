import { PaginationActionType } from '../types/pagination/paginationActionType';
import { pageTypeConstants } from '../common/pageTypeConstants';

export const paginationReducer = (state =[], action:PaginationActionType) => {
    switch(action.type) {
        case pageTypeConstants.CHANGE_PAGE:
            return [ ...state ];
        default:
            return state;
    }
};