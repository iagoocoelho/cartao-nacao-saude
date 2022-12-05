import { call, put } from 'redux-saga/effects';
import { AuthApi, Api } from 'common/api';
import { authSuccess, authFailure, verifyTokenSuccess, verifyTokenFailure, authRequest as retryToken } from './actions';

export function* authRequest() {
    try {
        const { data } = yield call(AuthApi.post, "/auth/authorization");
        yield put(authSuccess(data));
    } catch (error) {
        yield put(authFailure());
    }
}

export function* verifyTokenRequest() {
    try {
        const { data } = yield call(Api.post, "/auth/verifytoken");
        yield put(verifyTokenSuccess(data));
    } catch (error) {
        yield put(retryToken());
        yield put(verifyTokenFailure(error));
    }
}