const initialState = {
	list: {},
	id: null,
	special_package: null,
	package: null,
	listDetail: {
		data: {},
		isFetching: false,
		isLoaded: false,
		isError: false,
		error: {}
	},
	isFetching: false,
	isLoaded: false,
	isError: false,
	error: {}
}

const packageReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_PACKAGE_REQUEST': {
			return {
				...state,
				isFetching: true,
				isLoaded: false
			}
		}
		case 'GET_PACKAGE_SUCCESS': {
			return {
				...state,
				list: action.payload,
				isFetching: false,
				isLoaded: true,
				isError: false
			}
		}
		case 'GET_SPECIAL_PACKAGE_SUCCESS': {
			return {
				...state,
				sp_list: action.payload,
				isFetching: false,
				isLoaded: true,
				isError: false
			}
		}
		case 'ADD_PACKAGE_SUCCESS': {
			return {
				...state,
				id: action.payload.data.package_id,
				isFetching: true,
				isLoaded: false
			}
		}
		case 'ADD_PACKAGE_ERROR': {
			return {
				...state,
				list: {},
				isFetching: false,
				isLoaded: false,
				isError: true,
				error: action.payload
			}
		}
		case 'GET_PACKAGE_ERROR': {
			return {
				...state,
				list: {},
				isFetching: false,
				isLoaded: false,
				isError: true,
				error: action.payload
			}
		}

		case 'SEARCH_PACKAGE_SUCCESS': {
			return {
				...state,
				list: action.payload,
				isFetching: false,
				isLoaded: true,
				isError: false
			}
		}
		case 'SEARCH_SPECIAL_PACKAGE_SUCCESS': {
			return {
				...state,
				list: action.payload,
				isFetching: false,
				isLoaded: true,
				isError: false
			}
		}
		case 'GET_PACKAGE_DETAIL_SUCCESS': {
			return {
				...state,
				package: action.payload,
				isFetching: false,
				isLoaded: true,
				isError: false
			}
		}
		case 'GET_PACKAGE_DETAIL_ERROR': {
			return {
				...state,
				list: {},
				isFetching: false,
				isLoaded: false,
				isError: true,
				error: action.payload
			}
		}
		case 'GET_SPECIAL_PACKAGE_DETAIL_SUCCESS': {
			return {
				...state,
				special_package: action.payload,
				isFetching: false,
				isLoaded: true,
				isError: false
			}
		}
		case 'GET_SPECIAL_PACKAGE_DETAIL_ERROR': {
			return {
				...state,
				list: {},
				isFetching: false,
				isLoaded: false,
				isError: true,
				error: action.payload
			}
		}
		case 'UPDATE_PACKAGE_SUCCESS': {
			return {
				...state,
				isFetching: false,
				isLoaded: true,
				isError: false
			}
		}
		case 'UPDATE_PACKAGE_ERROR': {
			return {
				...state,
				isFetching: false,
				isLoaded: true,
				isError: true,
				error: action.payload
			}
		}
		default: {
			return state;
		}
	}
}

export default packageReducer;
