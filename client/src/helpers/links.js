import { ROUTES } from '../constants';
import { getUserId } from './storages';

export const goToUserProfile = () => {
    return `${ROUTES.USER_PROFILE}/${getUserId()}`
};