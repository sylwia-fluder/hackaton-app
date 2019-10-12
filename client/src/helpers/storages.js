import { STORAGE_NAMES } from '../constants';

export const getUserToken = () => sessionStorage.getItem(STORAGE_NAMES.USER)._token;

export const getUserId = () => sessionStorage.getItem(STORAGE_NAMES.USER)._id;