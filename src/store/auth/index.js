import { authTypes } from './types';

const INITIAL_STATE = {
    loading: false,
    success: false,
    error: false,
    data: {},
    tokenVerify: {
        loading: false,
        success: false,
        error: false,
    }
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case authTypes.AUTH_REQUEST:
            return {
                ...state,
                loading: true
            };
        case authTypes.AUTH_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                success: true,
                loading: false,
                error: false
            };
        case authTypes.AUTH_FAILURE:
            return {
                ...state,
                success: false,
                loading: false,
                error: true
            };

        case authTypes.VERIFY_TOKEN_REQUEST:
            return {
                ...state,
                tokenVerify: {
                    ...state.tokenVerify,
                    loading: true
                }
            };
        case authTypes.VERIFY_TOKEN_SUCCESS:
            return {
                ...state,
                tokenVerify: {
                    ...state.tokenVerify,
                    message: 'Token válido',
                    success: true,
                    loading: false,
                    error: false
                }
            };
        case authTypes.VERIFY_TOKEN_FAILURE:
            return {
                ...state,
                tokenVerify: {
                    ...state.tokenVerify,
                    message: action.payload.error.message,
                    success: false,
                    loading: false,
                    error: true
                }
            };
        default:
            return state;
    }
};

export default reducer;

