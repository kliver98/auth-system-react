import { GET_DEPENDENCIES } from './constants';

const getDependencies = (dependencies) => {
    return {
        type: GET_DEPENDENCIES,
        payload: dependencies,
    };
}

export default getDependencies;