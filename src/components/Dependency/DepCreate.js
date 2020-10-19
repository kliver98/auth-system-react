import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE } from '../../actions/constants';
import firebase from '../../config/firebase';

function template() {
    return (
        <div>
            
        </div>
    )
}

export default class DepCreate extends Component {
    constructor() {
        super();
        this.state = {
          users: [],
          id: '',
          dependency: {
              active: true,
              coordinator: '',
              location: '',
              max_users: 100,
              name: '',
          },
          db: firebase.firestore(),
        };
    }

    componentDidMount = () => {
        let users = [];
        this.state.db
          .collection("users")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let u = doc.data();
                let user = {
                    fullname: u.name+' '+u.last_name,
                    email: u.email,
                    rol: u.rol,
                }
                users.push(user);
            });});
        this.setState({
            users,
        })
    };

    render() {
        return(
            <div className="container ">
            </div>
        );
    
    }
}