import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { BASE, UPDATE_USER, DELETE_USER } from '../../actions/constants';
import { Card, Button } from 'react-bootstrap';
import firebase from '../../config/firebase';

export default class UserItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            db: firebase.firestore(),
            obj: props.user,
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    CardPersonalized = () => {
        let obj = this.state.obj;
        return (
            <div id="cardUserItem">
                <Card className="text-left mb-4">
                    <Router>
                        <Card.Header as="h5" id="title">{obj.name}</Card.Header>
                        <Card.Body>
                        <Card.Title>Usuario: <Link className="active" to={BASE+"user/"+obj.name}>{obj.name}</Link></Card.Title>
                            <Button variant="secondary" className="mr-2"><i className="far fa-edit"></i> {UPDATE_USER.split(' ')[0]}</Button>
                            <Button variant="danger" onClick={this.handleDelete}><i className="fas fa-trash"></i> {DELETE_USER.split(' ')[0]}</Button>
                        </Card.Body>
                    </Router>
                </Card>
            </div>
        )
    }

    handleDelete = () => {
        let obj = this.state.obj;
        if (!obj.users || obj.users.user_id.length === 0)
            this.state.db.collection("users").doc(obj.id).delete();
    }

    handleUpdate = () => {

    }

    render() {

        return (
            <div>
                <this.CardPersonalized />
            </div>
        );

    }
}