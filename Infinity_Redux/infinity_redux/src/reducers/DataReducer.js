export const AddDataReducer = (state=[], action) => {
    switch(action.type){
        case 'ADD_DATA':
        return [
            ...state,
            action.price
        ];
        default:
            return state;
    }
};

export const SortDataReducer = (state=[], action) => {
    switch(action.type){
        case 'SORT_DATA':
             const sort_price_data = [
                 ...state,
                 ...action.price_Data
             ];
              return sort_price_data.sort((a, b) => {
                 return a > b;
              });
             //return sort_price_data.reverse();
        default:
            return state;
    }
};
