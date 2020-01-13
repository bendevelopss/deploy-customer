const initialState = {
    list: {},
    isFetching: false,
    isLoaded: false,
    error: {},
    index: null,
    product_type: {}
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_SUCCESS': {
            return {
                ...state,
                isFetching: true,
                isLoaded: false
            }
        }
        case 'ADD_PRODUCT_ERROR': {
            return {
                ...state,
                list: {},
                isFetching: false,
                isLoaded: false,
                error: action.payload
            }
        }
        case 'GET_ALL_PRODUCT_SUCCESS': {
            return {
                ...state,
                list: action.payload,
                isFetching: false,
                isLoaded: false
            }
        }
        case 'GET_ALL_PRODUCT_ERROR': {
            return {
                ...state,
                list: {},
                isFetching: false,
                isLoaded: false,
                error: action.payload
            }
        }
        case 'GET_ALL_PRODUCT_TYPE_SUCCESS': {
            return {
                ...state,
                product_type: action.payload,
                isFetching: false,
                isLoaded: false
            }
        }
        case 'GET_ALL_PRODUCT_TYPE_ERROR': {
            return {
                ...state,
                list: {},
                isFetching: false,
                isLoaded: false,
                error: action.payload
            }
        }
        case 'GET_PRODUCT_DETAIL_SUCCESS': {
			return {
                ...state,
                index: action.index,
				listDetail: action.payload,
				isFetching: false,
				isLoaded: true,
				isError: false
			}
		}
		case 'GET_PRODUCT_DETAIL_ERROR': {
			return {
				...state,
				list: {},
				isFetching: false,
				isLoaded: false,
				isError: true,
				error: action.payload
			}
		}
        default: {
            return state;
        }
    }
}

export default productReducer;
