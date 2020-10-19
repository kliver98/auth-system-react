import { GET_DEPENDENCIES } from '../actions/constants';
import firebase from '../config/firebase';

const db = firebase.firestore();

let defaultState = {
    dependencies: []
}

const reload = () => {
    defaultState.dependencies = []
    db.collection("dependencies")
    .get()
    .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        defaultState.dependencies.push({id: doc.id, name: doc.data().name});
    });
    });
}

reload();

function reducer(state = defaultState, { type, payload}) {
    switch (type) {
        case GET_DEPENDENCIES:
            reload();
            return defaultState.dependencies;
        default:
            return state;
    }
}

export default reducer;