import { getUserToken } from './storages';

const headers = () => {
    return {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };
};

const headersWithToken = () => {
    return {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-auth-token': getUserToken,
    };
};

export {
    headers,
    headersWithToken,
};