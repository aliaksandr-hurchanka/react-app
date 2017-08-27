const fetchItems = () => {

    return {
        type: 'FETCH_ITEMS',
        payload: {}
    };

}

const changeActivePage = (page) => {
  
      return {
          type: 'CHANGE_ACTIVE_PAGE',
          payload: { page }
      };
  
  }

export {
    fetchItems,
    changeActivePage
};
