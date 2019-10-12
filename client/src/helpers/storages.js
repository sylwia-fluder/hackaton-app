import { STORAGE_NAMES } from '../constants';

export const getUserToken = () => JSON.parse(sessionStorage.getItem(STORAGE_NAMES.USER))._token;

export const getUserId = () => JSON.parse(sessionStorage.getItem(STORAGE_NAMES.USER))._id;