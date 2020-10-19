import { SET_USER } from './constants';

const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user,
    };
}

export default setUser;