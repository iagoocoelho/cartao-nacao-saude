import { packagesTypes } from './types';

const INITIAL_STATE = {
    data: {
        loading: false,
        success: false,
        error: false,
        packages: []
    },
    register: {
        loading: false,
        success: false,
        error: false,
    }
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case packagesTypes.PACKAGES_REQUEST:
            return {
                ...state,
                data: {
                    ...state.data,
                    loading: true,
                    success: false,
                    error: false,
                }
            };
        case packagesTypes.PACKAGES_SUCCESS:
            return {
                ...state,
                data: {
                    ...state.data,
                    packages: action.payload.data.partners_packages[0].packages,
                    success: true,
                    loading: false,
                    error: false
                }
            };
        case packagesTypes.PACKAGES_FAILURE:
            return {
                ...state,
                data: {
                    ...state.data,
                    success: false,
                    loading: false,
                    error: true
                }
            };

        case packagesTypes.REGISTER_REQUEST:
            return {
                ...state,
                register: {
                    loading: true,
                    success: false,
                    error: false,
                }
            };
        case packagesTypes.REGISTER_SUCCESS:
            return {
                ...state,
                register: {
                    ...state.register,
                    data: action.payload.data,
                    success: true,
                    loading: false,
                    error: false
                }
            };
        case packagesTypes.REGISTER_FAILURE:
            return {
                ...state,
                register: {
                    ...state.register,
                    data: action.payload.error,
                    success: false,
                    loading: false,
                    error: true
                }
            };
        case packagesTypes.REGISTER_RESET:
            return {
                ...state,
                register: {
                    ...INITIAL_STATE.register
                }
            };
        default:
            return state;
    }
};

export default reducer;

