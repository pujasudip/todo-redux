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