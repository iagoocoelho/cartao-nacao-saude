import { call, put } from 'redux-saga/effects';
import { Api } from 'common/api';
import { packagesSuccess, packagesFailure, registerSuccess, registerFailure, registerReset, registerRequest as retryRegister } from './actions';
import { authRequest } from '../auth/actions';
import { showToastr } from 'store/toast/actions'

export function* packagesRequest() {
    try {
        const { data } = yield call(Api.get, "/packages");
        yield put(packagesSuccess(data));
    } catch (error) {
        yield put(packagesFailure(error));
    }
}

export function* registerRequest(action) {
    try {
        const { data } = yield call(Api.post, "/customer", action.payload.data);
        yield put(registerSuccess(data));
        yield put(showToastr({ type: 'success', message: 'Cadastrado com sucesso!' }));
        yield put(registerReset());
    } catch (error) {
        if (error.status === 403) {
            yield put(authRequest());
            yield put(retryRegister(action.payload.data));
        } else {
            yield put(showToastr({ type: 'danger', message: error.data.message }));
            yield put(registerFailure(error));
        }
    }
}