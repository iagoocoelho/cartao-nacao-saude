import { action } from 'typesafe-actions';
import { packagesTypes } from './types';

export const packagesRequest = () => action(packagesTypes.PACKAGES_REQUEST);
export const packagesSuccess = (data) => action(packagesTypes.PACKAGES_SUCCESS, { data });
export const packagesFailure = (error) => action(packagesTypes.PACKAGES_FAILURE, { error });

export const registerRequest = (data) => action(packagesTypes.REGISTER_REQUEST, { data });
export const registerSuccess = (data) => action(packagesTypes.REGISTER_SUCCESS, { data });
export const registerFailure = (error) => action(packagesTypes.REGISTER_FAILURE, { error });
export const registerReset = () => action(packagesTypes.REGISTER_RESET);