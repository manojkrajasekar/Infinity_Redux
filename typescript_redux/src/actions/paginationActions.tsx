import { PaginationActionType } from '../types/pagination/paginationActionType';
import { pageTypeConstants } from '../common/pageTypeConstants';

export const changePageAction = (pageNumber: number, pageSize: number): PaginationActionType => {
    return {
        type: pageTypeConstants.CHANGE_PAGE,
        payload : {
            pageNumber,
            pageSize
        }
    };
};