const initialState = {
    list: {},
    listOrder: {},
    listDetail: {
		data: {},
		isFetching: false,
		isLoaded: true,
		isError: false,
		error: {}
    },
    listPhotos:{},
    contactList:{},
    isFetching: false,
    isLoaded: false,
    error: {},
    isUpload: false,
    isDeleted:false,
    isGalleryExists: true,
}

const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ACCESS_SUCCESS': {
            return {
                ...state,
                isFetching: true,
                isLoaded: false
            }
        }
        case 'GET_ACCESS_ERROR': {
            return {
                ...state,
                list: {},
                listOrder: {},
                isFetching: false,
                isLoaded: false,
                error: action.payload
            }
        }
        case 'GET_GALLERY_FULFILLED': {
			return {
                ...state,
                list: action.payload,
				isFetching: false,
				isLoaded: true,
				isError: false
			}
        }
        case 'GET_GALLERY_ORDER_FULFILLED': {
			return {
                ...state,
                listOrder: action.payload,
				isFetching: false,
				isLoaded: true,
				isError: false
			}
        }
        case 'GET_DETAIL_FULFILLED': {
			return {
                ...state,
                listDetail: action.payload,
				isFetching: false,
				isLoaded: true,
                isError: false,
                isGalleryExists: true
			}
        }
        case 'GALLERY_NOT_EXISTS':{
            return {
                ...state,
                isGalleryExists: false
            }
        }
        case 'GET_PHOTOS_FULFILLED': {
			return {
                ...state,
                listPhotos: action.payload,
				isFetching: false,
				isLoaded: true,
				isError: false
			}
        }
        case 'SEARCH_GALLERY_FULFILLED': {
			return {
                ...state,
                list: action.payload,
				isFetching: true,
				isLoaded: true,
				isError: false
			}
        }
        case 'SEARCH_CUSTOMER_GALLERY_SUCCESS': {
			return {
                ...state,
                contactList: action.payload,
				isFetching: true,
				isLoaded: true,
				isError: false
			}
		}
        case 'GET_GALLERY_ERROR': {
            return {
                ...state,
                list: {},
                listOrder: {},
                isFetching: false,
                isLoaded: false,
                error: action.payload
            }
        }
        case 'GET_GALLERY_ORDER_ERROR': {
            return {
                ...state,
                list:{},
                listOrder: {},
                isFetching: false,
                isLoaded: false,
                error: action.payload
            }
        }
        case 'UPLOAD_IMG_SUCCESSFUL':{
            return{
                ...state,
                isUpload: true
            }
        }
        case 'DELETE_PHOTOS_SUCESSFUL':{
            return{
                ...state,
                isDeleted: true
            }
        }
        default: {
            return state;
        }
    }
}

export default galleryReducer;
