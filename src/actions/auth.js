import axios from 'axios';
import { constant } from '../config';
// import { push } from 'react-redux';
import Cookies from 'universal-cookie';
// import { serverChecker } from '../utils/utils';

const cookies = new Cookies();

export const login = (data) => {
    return async(dispatch) => {
        return axios
            .post(`${constant.baseUrl}customer/access/authenticate`, data)
            .then((response) => {
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: response
                });
				cookies.set('accessToken', response.data.data.accessToken, { path: '/home-page' });
				cookies.set('customer', response.data.data.customer, { path: '/home-page' });
            })
            .then(() => {
                window.location.replace('/home-page');
            })
            .catch((error) => {
                // serverChecker(error)
                dispatch({
                    type: 'LOGIN_REJECTED',
                    payload: error
                });
            });
    }
}

export const logout = () => {
	return async dispatch => {
		cookies.remove('accessToken');
		cookies.remove('user');
		dispatch({
            type: 'LOGOUT_SUCCESS'
        });
        window.location.reload();
	}
}
