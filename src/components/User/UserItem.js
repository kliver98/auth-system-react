import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import firebase from '../../config/firebase';
import { BASE } from '../../actions/constants';

export default class UserItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            db: firebase.firestore(),
            user: props.user,
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    CardPersonalized = () => {
        let user = this.state.user;
        return (
            <div id="cardUserItem">
                <Card className="text-left mb-4">
                    <Router>
                        <Card.Header as="h5" id="title"><Link className="active" to={BASE+"user/"+user.name}>{user.name}</Link></Card.Header>
                        <Card.Body>
                            <Card.Title>Usuario: </Card.Title>
                            <Button variant="secondary" className="mr-2"><i className="far fa-edit"></i> Editar</Button>
                            <Button variant="danger" onClick={this.handleDelete}><i className="fas fa-trash"></i> Eliminar</Button>
                        </Card.Body>
                    </Router>
                </Card>
            </div>
        )
    }

    handleDelete = () => {
        let user = this.state.user;
        if (!user.users || user.users.user_id.length === 0)
            this.state.db.collection("users").doc(user.id).delete();
    }

    render() {

        return (
            <div>
                <this.CardPersonalized />
            </div>
        );

    }
}