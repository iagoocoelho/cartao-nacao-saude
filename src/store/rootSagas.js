
import { all, takeLatest } from 'redux-saga/effects';

// Auth
import { authRequest, verifyTokenRequest } from './auth/sagas';
import { authTypes } from './auth/types';

// Packages
import { packagesRequest, registerRequest } from './packages/sagas';
import { packagesTypes } from './packages/types';


export default function* rootSaga() {
  return yield all([
    takeLatest(authTypes.AUTH_REQUEST, authRequest),
    takeLatest(authTypes.VERIFY_TOKEN_REQUEST, verifyTokenRequest),
    takeLatest(packagesTypes.PACKAGES_REQUEST, packagesRequest),
    takeLatest(packagesTypes.REGISTER_REQUEST, registerRequest),
  ])
}
