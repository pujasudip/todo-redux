import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=618-lfz-sudip-todolist';

export function getAllListData(){
    const response = axios.get(`${BASE_URL}/todos${API_KEY}`);

    return {
        type: types.GET_ALL_LIST_DATA,
        payload: response
        // payload: 'this is a test'
    }
}

export function addItem(item){
    const response = axios.post(`${BASE_URL}/todos${API_KEY}`, item);

    return {
        type: types.ADD_ITEM,
        payload: response
    }
}

export const getSingleItem = id => async dispatch => {
    try {
        const response =  await axios.get(`${BASE_URL}/todos/${id + API_KEY}`);
        dispatch({
            type: types.GET_SINGLE_ITEM,
            payload: response
        });
    } catch(err){
        dispatch({
            type: types.LIST_ERROR,
            error: 'No item found'
        });
    }
}

export function deleteItem(id) {
    return async function (dispatch) {
        try {
            const resp = await axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);

            console.log('DELETE WoRKeD?!/^*&DiD iT???? LOL');

            dispatch({
                type: types.DELETE_ITEM,
                payload: resp
            })
        } catch(err){
            dispatch({
                type: types.LIST_ERROR,
                error: 'Failed to delete item'
            });
        }
    }
}

// export function resetSingle(){
//     return  {
//         type: types.RESET_SINGLE_VIEW
//     }
// }

export const resetSingle = () => ({type: types.RESET_SINGLE_VIEW});