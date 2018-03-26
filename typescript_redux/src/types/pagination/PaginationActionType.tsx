import { pageTypeConstants } from '../../common/pageTypeConstants';
import { PaginationPayLoadType } from './PaginationPayLoadType';

export interface PaginationActionType {
    type: pageTypeConstants;
    payload: PaginationPayLoadType;
}