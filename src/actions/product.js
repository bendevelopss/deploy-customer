import axios from 'axios';
import { constant } from '../config';
import Cookies from 'universal-cookie';
// import { serverChecker } from '../utils/utils';

let headers = { 'Content-Type': 'x-www-form-urlencoded' };
const cookies = new Cookies();
const accessToken = cookies.get('accessToken') || null;

export const addNewProduct = (data) => {
    const productData = {
        "product_name": data.product_name,
        "unit_cost": data.unit_cost,
        "product_type_id": data.product_type_id,
        "quantity": data.quantity,
        "status": "active"
    }

    return async (dispatch) => {
        return axios
            .post(
                `${constant.baseUrl}product/create?accessToken=${accessToken}`,
                productData
            )
            .then((response) => {
                dispatch({
                    type: 'ADD_PRODUCT_SUCCESS',
                    payload: response.data
                })
                window.location.reload();
            })
            .catch((error) => {
                dispatch({
                    type: 'ADD_PRODUCT_ERROR',
                    payload: error
                })
            })
    }
}

export const fetchAllProduct = (query = '') => {
    
    return async (dispatch) => {
        return axios
            .get(`${constant.baseUrl}product/list?accessToken=${accessToken}&query=${query}`)
            .then((response) => {
                dispatch({
                    type: 'GET_ALL_PRODUCT_SUCCESS',
                    payload: response.data
                })
            })
            .catch((error) => {
                // serverChecker(error)
                dispatch({
                    type: 'GET_ALL_PRODUCT_ERROR',
                    payload: error
                })

            })
    }
}

export const fetchAllProductTypes = () => {
    return async (dispatch) => {
        return axios
            .get(`${constant.baseUrl}product-type/list?accessToken=${accessToken}`)
            .then((response) => {
               
                dispatch({
                    type: 'GET_ALL_PRODUCT_TYPE_SUCCESS',
                    payload: response.data
                })
            })
            .catch((error) => {
                // serverChecker(error)
                dispatch({
                    type: 'GET_ALL_PRODUCT_TYPE_ERROR',
                    payload: error
                })
            })
    }
}

export const fetchProduct = (id, index = null) => {
    return async (dispatch) => {
        return axios
            .get(`${constant.baseUrl}product/detail?accessToken=${accessToken}&id=${id}`)
            .then((response) => {
                dispatch({
                    type: 'GET_PRODUCT_DETAIL_SUCCESS',
                    payload: response.data,
                    index: index,
                })
            })
            .catch((error) => {
                // serverChecker(error)
                dispatch({
                    type: 'GET_PRODUCT_DETAIL_ERROR',
                    payload: error
                })
            })
    }
}

export const updateProduct = (data) => {
    return async (dispatch) => {
        return axios
            .put(
                `${constant.baseUrl}product/update?accessToken=${accessToken}`,
                data,
                headers
            )
            .then((response) => {
                dispatch({
                    type: 'UPDATE_PRODUCT_SUCCESS',
                    payload: response.data
                })
                window.location.reload();
            })
            .catch((error) => {
                dispatch({
                    type: 'UPDATE_PRODUCT_ERROR',
                    payload: error
                })
            })
    }
}

export const hideProduct = (data) => {
    return async (dispatch) => {
        return axios
            .put(
                `${constant.baseUrl}product/show-hide?accessToken=${accessToken}`,
                data,
                headers
            )
            .then((response) => {
                dispatch({
                    type: 'HIDE_PRODUCT_SUCCESS',
                    payload: response.data
                })
                // window.location.reload();
            })
            .catch((error) => {
                dispatch({
                    type: 'HIDE_PRODUCT_ERROR',
                    payload: error
                })
            })
    }
}