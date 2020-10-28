import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { BASE, UPDATE_DEPENDENCY, DELETE_DEPENDENCY } from '../../actions/constants';
import { Card, Button } from 'react-bootstrap';
import firebase from '../../config/firebase';

export default class DepItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
          editing: false,
          db: firebase.firestore(),
          obj: props.dependency,
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    CardPersonalized = () => {
        let obj = this.state.obj;
        return (
            <div id="cardDepItem">
                <Card className="text-left mb-4">
                <Router>
                    <Card.Header as="h5" id="title">{obj.name}</Card.Header>
                    <Card.Body>
                        <Card.Title>Coordinador: <Link className="active" to={BASE+"user/"+obj.coordinator}>{obj.coordinator}</Link></Card.Title>
                        <Card.Text>
                            Ubicación: {obj.location}
                        </Card.Text>
                        <Card.Text>
                            Número máximo de usuarios: {obj.max_users}
                        </Card.Text>
                        <Card.Text>
                            Usuarios ({obj.users ? obj.users.user_id.length:0})
                        </Card.Text>
                        {   obj.users ? 
                                <ul>
                                    {
                                        obj.users ? obj.users.user_id.map(x =>
                                        <li key={x}><Link className="active" to={BASE+"user/"+x}>{x}</Link></li>):""
                                    }
                                </ul>:""
                            }
                        <Card.Text>
                            Activo : {obj.active ? "Sí":"No"}
                        </Card.Text>
                        <Button variant="secondary" onClick={() => this.props.changeToUpdate(obj)} className="mr-2 mb-1"><i className="far fa-edit"></i> {UPDATE_DEPENDENCY.split(' ')[0]}</Button>
                        <Button variant="danger" className="mb-1" onClick={this.handleDelete}><i className="fas fa-trash"></i> {DELETE_DEPENDENCY.split(' ')[0]}</Button>
                    </Card.Body>
                    </Router>
                </Card>
            </div>
        )
    }

    handleDelete = () => {
        let obj = this.state.obj;
        if (!obj.users || obj.users.user_id.length===0) {
            this.state.db.collection("dependencies").doc(obj.id).delete().then(() => window.location.href = "./all");
        }
    }

    render() {
    
        return(
            <div>
                <this.CardPersonalized/>
            </div>
        );
    
    }
}