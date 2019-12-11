import axios from 'axios';
import { constant } from '../config';
import Cookies from 'universal-cookie';
import { serverChecker } from '../utils/utils';

const cookies = new Cookies();
const accessToken = cookies.get('accessToken') || null;

export const fetchAllAccess = () => {
    return async(dispatch) => {
        return axios
            .get(`${constant.API_PATH}access/authenticate`)
            .then((response) => {
                dispatch({
                    type: 'GET_ACCESS_FULLFIELD',
                    payload: response.data
                })
            })
            .catch((error) => {
                serverChecker(error)
                dispatch({
                    type: 'GET_ACCESS_ERROR',
                    payload: error
                })
            })
    }
}
