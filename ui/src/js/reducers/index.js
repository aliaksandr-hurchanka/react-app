import update from 'react/lib/update';
import { slice } from 'lodash';

// mock data
const items = [
    {id: '1', author: 'name1', song: 'song1', genre: 'genre1', year: '2017'},
    {id: '2', author: 'name2', song: 'song2', genre: 'genre2', year: '2017'},
    {id: '3', author: 'name3', song: 'song3', genre: 'genre3', year: '2017'},
    {id: '4', author: 'name4', song: 'song4', genre: 'genre4', year: '2017'},
    {id: '5', author: 'name5', song: 'song5', genre: 'genre5', year: '2017'},
    {id: '6', author: 'name6', song: 'song6', genre: 'genre6', year: '2017'},
    {id: '7', author: 'name7', song: 'song7', genre: 'genre7', year: '2017'},
    {id: '8', author: 'name8', song: 'song8', genre: 'genre8', year: '2017'},
    {id: '9', author: 'name9', song: 'song9', genre: 'genre9', year: '2017'},
    {id: '10', author: 'name10', song: 'song10', genre: 'genre10', year: '2017'},
    {id: '11', author: 'name11', song: 'song11', genre: 'genre11', year: '2017'},
    {id: '12', author: 'name12', song: 'song12', genre: 'genre12', year: '2017'},
    {id: '13', author: 'name13', song: 'song13', genre: 'genre13', year: '2017'},
    {id: '14', author: 'name14', song: 'song14', genre: 'genre14', year: '2017'}
];
const availableFilters = {
    author: ['name3', 'name5'],
    genre: ['genre1', 'genre4'],
    year: ['2009', '2015']
}

const initialState = {
    items: [],
    activePage: 1,
    size: 4,
    totalItems: items.length,
    filters: {
        author: '',
        genre: '',
        year: ''
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_ITEMS": {
            
            const { from, to } = getInterval(state.activePage, state.size, state.totalItems);

            return update(state, {
                items: { $set: slice(items, from, to) },
                totalItems: { $set: items.length }
            });
        }
        case "GET_AVAILABLE_FILTERS": {
            return update(state, {
                filters: { $set: availableFilters }
            });
        }
        case "CHANGE_ACTIVE_PAGE": {
            
            const { from, to } = getInterval(action.payload.page, state.size, state.totalItems);

            return update(state, {
                activePage: { $set: action.payload.page },
                items: { $set: slice(items, from, to) }
            });
        }
        default: {
            return state;
        }
    }
}

function getInterval(activePage, size, totalItems) {
    const maxSize = (activePage * size);
    const isEmptyItems = totalItems && 0;
    const from = activePage === 1 ? isEmptyItems : (maxSize - size);
    const to = maxSize > totalItems ? totalItems : maxSize;

    return { from, to };
}
