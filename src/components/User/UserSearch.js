import React, { Component, useState } from 'react';
import { ProgressBar, Button, Card } from 'react-bootstrap';
import firebase from '../../config/firebase';
import UserItem from './UserItem';
import ReactDOM from 'react-dom'

export default class UserSearch extends Component {
    constructor() {
        super();
        this.state = {
        users: [],
        user_dependency: [],
        db: firebase.firestore(),
        };
    }

    getUsers = () => {
        let users = [];
        this.state.db
        .collection("users")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let u = doc.data();
                let user = {
                    id: doc.id,
                    email: u.email,
                    last_name: u.last_name,
                    name: u.name,
                }
                users.push(user);
            });
        });
        return users;
    }

    getUserDependency = () => {
        let u_deps = [];
        this.state.db
          .collection("user_dependency")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let u = doc.data();
                let u_dep = {
                    id: doc.id,
                    user_id: u.user_id,
                }
                u_deps.push(u_dep);
            });});
        return u_deps;
    }

    chargeUsers = (domElement) => {
        document.getElementById(domElement).innerHTML = '';
        var array = this.state.users;
        for (var i = 0; i < array.length; i++) {
            const element = array[i];
            
        }
        array = array.sort(
            function (a,b) {
                if (a.name>b.name) {
                    return 1
                };
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            }
        );
        array = array.map(user => (
            <UserItem user={user} key={user.id}/>
        ));
        ReactDOM.render(array,document.getElementById(domElement));
    }

    componentUidMount = () => {
        setTimeout(() => this.chargeUsers("founds"),800);
    };

    render() {
        this.state.users = this.getUsers();
        this.state.user_dependency = this.getUserDependency();
        
        return(
            <div className="container">
                <h1>Gestionar Usuarios</h1>
                <ProgressBar className="mb-5" variant="info" now={100} />
                <div id="founds"></div>
            </div>
        );
    
    }
}