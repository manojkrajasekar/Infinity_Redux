export const AddData = ({price} = {}) => {
    return {
        type:'ADD_DATA',
        price
    }
};


export const SortData = ({price_Data} = {}) => {
    return {
        type:'SORT_DATA',
        price_Data
    }
};