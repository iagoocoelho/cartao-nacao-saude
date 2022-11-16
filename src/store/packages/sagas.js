import { call, put } from 'redux-saga/effects';
import { Api } from 'common/api';
import { packagesSuccess, packagesFailure, registerSuccess, registerFailure } from './actions';
import { showToastr } from 'store/toast/actions'

export function* packagesRequest() {
    try {
        const { data } = yield call(Api.get, "/packages");
        yield put(packagesSuccess(data));
    } catch (error) {
        yield put(packagesFailure());
    }
}

export function* registerRequest(action) {
    try {
        const { data } = yield call(Api.post, "/customer", action.payload.data);
        yield put(registerSuccess(data));
        yield put(showToastr({ type: 'success', message: 'Cadastrado com sucesso!' }));
    } catch (error) {
        yield put(showToastr({ type: 'danger', message: error.data.message }));
        yield put(registerFailure(error.data));
    }
}