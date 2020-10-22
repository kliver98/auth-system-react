import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { BASE, CREATE_DEPENDENCY } from '../../actions/constants';
import firebase from '../../config/firebase';
import { Form, Col, Button } from 'react-bootstrap';
import { Redirect } from "react-router-dom";

class DepCreate extends Component {
    constructor() {
        super();
        this.state = {
          users: [],
          db: firebase.firestore(),
          active: false,
          redirect: false,
        };
        this.handleChangeMaxUsers = this.handleChangeMaxUsers.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    Form1 = () => {
        return (
            <>
                <h1 className="mb-5">{CREATE_DEPENDENCY}</h1>
                <Form id="form" onSubmit={this.handleSubmit}>
    
                    <Form.Group controlId="formGridName">
                        <Form.Label className="h4">Nombre</Form.Label>
                        <Form.Control placeholder="Ej: Logística" autoComplete="off"/>
                    </Form.Group>
    
                    <Form.Group controlId="formGridLocation">
                        <Form.Label className="h4">Lugar</Form.Label>
                        <Form.Control placeholder="Ej: Cali, Colombia" autoComplete="off"/>
                    </Form.Group>
    
                    <Form.Group controlId="formGroupSelectCustom">
                        <Form.Label className="h4" onClick={() => this.onClickUpdateCoordinator}>Coordinador</Form.Label>
                        <Form.Control as="select" controlId="formSelectUser" controlName="formSelectUser" htmlSize={5}>
                        <option>Cargando...</option>
                        </Form.Control>
                    </Form.Group>
    
                    <Form.Group as={Col} controlId="formGridMaxUser">
                        <Form.Label>Número máximo de usuarios</Form.Label>
                        <Form.Control onChange={this.handleChangeMaxUsers} placeholder="Solo números" autoComplete="off" />
                    </Form.Group>
    
                    <Form.Group id="formGridActive">
                        <Form.Check type="checkbox" onClick={(x) => {this.setState({active: x.target.checked})}} label="Activar" />
                    </Form.Group>
    
                    <Button variant="primary" type="submit">
                        {CREATE_DEPENDENCY}
                    </Button>
                </Form>
                {this.state.redirect ? <Redirect to='/auth-system-react/'  />:undefined}
            </>
        )
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
                    fullname: u.name+' '+u.last_name,
                    email: u.email,
                    rol: u.rol,
                }
                users.push(user);
            });});
        return users;
    }

    chargeOptions(domElement) {
        var array = this.state.users;

        var select = document.getElementById(domElement);
        while (select.options.length>0) {
            select.remove(0);
        }

        for (let value in array) {
            var option = document.createElement("option");
            option.id = array[value].email
            option.text = array[value].fullname;
            select.add(option);
        }
    }

    isNumber = (check) => {
        for (var i=0; i<check.length; i++) {
            var x = check[i];
            if (Number.isInteger(parseInt(x))=== false) {
                return false;
            }
        }
        return true;
    }

    onClickUpdateCoordinator = () => {
        this.state.users = this.getUsers();
        setTimeout(() => this.chargeOptions("formGroupSelectCustom"),600);
    }

    handleChangeMaxUsers = (event) => {
        event.preventDefault();
        let numbers = this.isNumber(event.target.value);
        if (numbers === false) {
            event.target.value = event.target.value.substr(0, event.target.value.length-1);
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        let docC = document.getElementById("formGroupSelectCustom");
        let indexC = docC.selectedIndex;
        let dependency = {
            active: this.state.active,
            coordinator: indexC!==-1 ? document.getElementById("formGroupSelectCustom").childNodes[indexC].getAttribute('id'):"",
            location: document.getElementById("formGridLocation").value,
            max_users: parseInt(document.getElementById("formGridMaxUser").value),
            name: document.getElementById("formGridName").value,
        };
        if (!this.checkFields(dependency.name, dependency.location,dependency.max_users)) {
            alert('Todos los campos se deben llenar, excepto Coordinador que lo puede dejar vacío.');
        } else {
            this.submit(dependency);
        }
    }

    checkFields = (name, location, max_users) => {
        if (name==="" || location==="" || isNaN(max_users) ) {
            return false;
        }
        return true;
    }

    submit = (dependency) => {
        this.state.db.collection("dependencies").add(dependency);
        alert('Creado Exitosamente');
        this.setState({
            redirect: true,
        })
    }

    componentDidMount = () => {
        setTimeout(() => this.chargeOptions("formGroupSelectCustom"),800);
    };

    render() {
        this.state.users = this.getUsers();
        return(
            <div className="container">
                <this.Form1/>
            </div>
        );
    
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.user,
    }
  };

  export default connect(mapStateToProps)(DepCreate);
