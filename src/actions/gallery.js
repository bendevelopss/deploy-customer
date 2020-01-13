import React, { useState } from 'react';
import axios from 'axios';
import { constant } from '../config';
import Cookies from 'universal-cookie';
// import { access } from 'fs';
// import watermark from 'watermarkjs';
// import logo from '../assets/bambini-logo.png';
// import { serverChecker } from '../utils/utils';
let headers = { 'Content-Type': 'x-www-form-urlencoded' };
const cookies = new Cookies();
const accessToken = cookies.get('accessToken');

export const fetchGalleryDetail = (gallery_id) => {
    return async (dispatch) => {
        return axios
            .get(`${constant.baseUrl}gallery/view?accessToken=${accessToken}&gallery_id=${gallery_id}`)
            .then((response) => {
                if (response.data.data.gallery_detail.length === 0) {
                    dispatch({
                        type: "GALLERY_NOT_EXISTS",
                        payload: response.data
                    })
                } else {
                    dispatch({
                        type: 'GET_DETAIL_FULFILLED',
                        payload: response.data
                    })
                }
            })
            .catch((error) => {
                // serverChecker(error)
                dispatch({
                    type: 'GET_DETAIL_FAIL',
                    payload: error
                })
            });
    }
}

export const fetchGalleryPhotos = (gallery_id) => {
    return async (dispatch) => {
        return axios
            .get(`${constant.baseUrl}gallery/photos?accessToken=${accessToken}&gallery_id=${gallery_id}`)
            .then((response) => {
                dispatch({
                    type: 'GET_PHOTOS_FULFILLED',
                    payload: response.data
                })
            })
            .catch((error) => {
                // serverChecker(error)
                dispatch({
                    type: 'GET_PHOTOS_FAIL',
                    payload: error
                })
            });
    }
}