import { CHANGE_SORT_BY } from './bookTypes';

export const changeSortBy = (sortBy: String) => {
    return {
        type: CHANGE_SORT_BY,
        payload: sortBy,
    };
};
