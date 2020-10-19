import { SET_USER } from '../actions/constants';
import firebase from '../config/firebase';

const db = firebase.firestore();

let defaultState = {
    fullname: '',
    email: '',
    rol: '',
}

db.collection("users")
    .get()
    .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        defaultState.fullname = doc.data().name+" "+doc.data().last_name;
        defaultState.email = doc.data().email;
        defaultState.rol = doc.data().rol;
    });
    });

function reducer(state = defaultState, { type, payload}) {
    switch (type) {
        case SET_USER:
            return defaultState;
        default:
            return state;
    }
}

export default reducer;