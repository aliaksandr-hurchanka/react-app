const getAvailableFilters = () => {
    return {
        type: 'GET_AVAILABLE_FILTERS',
        payload: {}
    };
}

const changeFilter = (filterProps) => {
    return {
        type: 'CHANGE_FILTER',
        payload: filterProps
    };
}
    
export {
    getAvailableFilters,
    changeFilter
};
