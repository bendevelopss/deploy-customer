import axios from 'axios';
import { constant } from '../config';
import Cookies from 'universal-cookie';
// import { serverChecker } from '../utils/utils';

let headers = { 'Content-Type': 'x-www-form-urlencoded' };
const cookies = new Cookies();
const accessToken = cookies.get('accessToken') || null;

export const fetchAllPackage = (flag) => {
    let data ={
        special_package_flag: flag
      }
    return async(dispatch) => {
        return axios
            .post(`${constant.baseUrl}package/list?accessToken=${accessToken}`, data)
            .then((response) => {
                dispatch({
                    type: 'GET_PACKAGE_SUCCESS',
                    payload: response.data
                })
            })
            .catch((error) => {
                // serverChecker(error)
                dispatch({
                    type: 'GET_PACKAGE_ERROR',
                    payload: error
                })
            })
    }
}

export const fetchAllSpecialPackage = (flag = true) => {
    let data ={
        special_package_flag: flag
      }
    return async(dispatch) => {
        return axios
            .post(`${constant.baseUrl}package/list?accessToken=${accessToken}`, data)
            .then((response) => {
                dispatch({
                    type: 'GET_SPECIAL_PACKAGE_SUCCESS',
                    payload: response.data
                })
            })
            .catch((error) => {
                // serverChecker(error)
                dispatch({
                    type: 'GET_SPECIAL_PACKAGE_ERROR',
                    payload: error
                })
            })
    }
}

export const fetchPackage = (id) => {
    return async(dispatch) => {
        return axios
            .get(`${constant.baseUrl}customer/package/detail?accessToken=${accessToken}&id=${id}`)
            .then((response) => {
                dispatch({
                    type: 'GET_PACKAGE_DETAIL_SUCCESS',
                    payload: response.data
                })
            })
            .catch((error) => {
                // serverChecker(error)
                dispatch({
                    type: 'GET_PACKAGE_DETAIL_ERROR',
                    payload: error
                })
            })
    }
}

export const fetchSpecialPackage = (id) => {
    return async(dispatch) => {
        return axios
            .get(`${constant.baseUrl}package/detail?accessToken=${accessToken}&id=${id}`)
            .then((response) => {
                dispatch({
                    type: 'GET_SPECIAL_PACKAGE_DETAIL_SUCCESS',
                    payload: response.data
                })
            })
            .catch((error) => {
                // serverChecker(error)
                dispatch({
                    type: 'GET_SPECIAL_PACKAGE_DETAIL_ERROR',
                    payload: error
                })
            })
    }
}

export const searchPackage = (query) =>{
    return async(dispatch)=>{
        return axios
        .get(`${constant.baseUrl}package/search?accessToken=${accessToken}&query=${query}`)
        .then((response)=>{
            dispatch({
                type: 'SEARCH_PACKAGE_SUCCESS',
                payload: response.data
            })
        })
        .catch((error)=>{
            // serverChecker(error)
            dispatch({
                type: 'SEARCH_PACKAGE_FAIL',
                payload: error
            })
        });
    }
}

export const searchSpecialPackage = (query) =>{
    return async(dispatch)=>{
        return axios
        .get(`${constant.baseUrl}package/special/search?accessToken=${accessToken}&query=${query}`)
        .then((response)=>{
            dispatch({
                type: 'SEARCH_SPECIAL_PACKAGE_SUCCESS',
                payload: response.data
            })
        })
        .catch((error)=>{
            // serverChecker(error)
            dispatch({
                type: 'SEARCH_SPECIAL_PACKAGE_FAIL',
                payload: error
            })
        });
    }
}

export const addNewPackage = (data) => {
    const packageData = {
        package_name: data.package_name,
        status: 'active',
        special_package_flag: data.special_package_flag,
        package_price: data.package_price,
        product: data.product
    }

    return async (dispatch) => {
        return axios
            .post(
                `${constant.baseUrl}package/create?accessToken=${accessToken}`,
                packageData
            )
            .then((response) => {
                dispatch({
                    type: 'ADD_PACKAGE_SUCCESS',
                    payload: response.data
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'ADD_PACKAGE_ERROR',
                    payload: error
                })
            })
    }
}

export const updatePackage = (data) => {

    const param = {
        package_id: data.package_id,
        package_name: data.package_name,
        package_price: data.package_price,
        product: data.product,
        special_package_flag: data.special_package_flag,
        status: data.status,
    }

    return async(dispatch) => {
        return axios
            .put(
                `${constant.baseUrl}package/update?accessToken=${accessToken}`,
                param,
                headers
            )
            .then((response) => {
                dispatch({
                    type: 'UPDATE_PACKAGE_SUCCESS',
                    payload: response.data
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'UPDATE_PACKAGE_ERROR',
                    payload: error
                })
            })
    }
}

export const removeProductFromPackage = (prod_id, pack_id) => {
    return async(dispatch) => {
        return axios
            .delete(
                `${constant.baseUrl}package/remove-product?product_id=${prod_id}&package_id=${pack_id}&accessToken=${accessToken}`,
                headers
            )
            .then((response) => {
                dispatch({
                    type: 'DELETE_PRODUCT_SUCCESS',
                    payload: response.data
                })
                window.location.reload();
            })
            .catch((error) => {
                dispatch({
                    type: 'DELETE_PRODUCT_ERROR',
                    payload: error
                })
            })
    }
}