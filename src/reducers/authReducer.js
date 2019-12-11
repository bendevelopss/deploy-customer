const initialState = {
	accessToken: '',
	user: {},
	isLoggingIn: false,
	isAuthenticated: false,
	error: false
}

const authReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'LOGIN_REQUESTED': {
			return {
				...state,
				isLoggingIn: true,
				isAuthenticated: false
			}
		}
		case 'LOGIN_SUCCESS': {
			return {
				...state,
				isLoggingIn: false,
				isAuthenticated: true,
				user: action.payload,
				error: false
			}
		}
		case 'LOGIN_REJECTED': {
			return {
				...state,
				accessToken: '',
				user: {},
				isLoggingIn: false,
				isAuthenticated: false,
				error: action.payload
			}
		}

		case 'LOGOUT_SUCCESS': {
			return {
				...state,
				isLoggingIn: false,
				isAuthenticated: false,
				user: {},
				accessToken: '',
				error: {}
			}
		}

		default: {
			return state;
		}
	}
}

export default authReducer;
