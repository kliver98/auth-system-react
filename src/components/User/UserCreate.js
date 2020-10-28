import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BASE, GET_DEPENDENCIES } from '../../actions/constants';
import firebase from '../../config/firebase';

let display = {
    display: 'none',
}

class UserCreate extends Component {

    constructor() {
        super();
        this.state = {
            db: firebase.firestore(),
        };
    }

    linked = (dependencies,user_dependency) => {
        let array = [];
        for (let i = 0; i<dependencies.length; i++) {
            let dep = dependencies[i];
            let a = user_dependency.find(i => i.id===dep.id);
            dep.users = a ? a.user_id:[];
            array.push(dep);
        }
        return array;
    }

    chargeOptions(domElement, array) {
        var select = document.getElementById(domElement);
        while (select.options.length>0) {
            select.remove(0);
        }
        for (let value in array) {
            var option = document.createElement("option");
            let item = array[value];
            if (item.users.length>=item.max_users) {
                continue;
            }
            option.id = item.id
            option.text = item.name+" | ocupación: "+item.users.length+"/"+item.max_users;
            select.add(option);
        }
    }

    Form1() {
        let t = [];
        return (
            <div className="col-12">
                <form className="form-horizontal" onSubmit={(event) => this.handleSubmit(event)}>
                    <fieldset>
                        <div id="legend">
                        <legend className="">Registrarse</legend>
                        <span id="error"></span>
                        </div>
                        <div className="progress mb-2">
                            <div className="progress-bar bg-info" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    
                        <div className="control-group">
                        <label className="control-label" htmlFor="email">E-mail</label>
                        <div className="controls">
                            <input type="email" id="email" name="email" placeholder="example@correo.com" autoComplete="off" className="col-10" />
                        </div>
                        </div>
                    
                        <div className="control-group">
                        <label className="control-label" htmlFor="password">Contraseña</label>
                        <div className="controls">
                            <input type="password" id="password" name="password" placeholder="" autoComplete="off" className="col-10" />
                        </div>
                        </div>
        
                        <div className="control-group">
                        <label className="control-label"  htmlFor="username">Nombre</label>
                        <div className="controls">
                            <input type="text" id="username" name="username" placeholder="" autoComplete="off" className="col-10" />
                        </div>
                        </div>
        
                        <div className="control-group">
                        <label className="control-label"  htmlFor="last_name">Apellido</label>
                        <div className="controls">
                            <input type="text" id="last_name" name="last_name" placeholder="" autoComplete="off" className="col-10" />
                        </div>
                        </div>
        
                        <div className="control-group">
                        <label className="control-label"  htmlFor="valid_until">Cuenta válida hasta</label>
                        <div className="controls">
                        <input type="datetime-local" id="valid_until" name="valid_until" className="col-10"></input>
                        </div>
                        </div>
        
                        <div className="control-group">
                        <label className="control-label" style={display} htmlFor="active">¿Cuenta activa?</label>
                        <div className="controls">
                            <input type="text" id="active" name="active" readOnly value="1" autoComplete="off" style={display} className="col-10" />
                        </div>
                        </div>
        
                        <div className="control-group">
                        <label className="control-label" style={display} htmlFor="rol">Rol</label>
                        <div className="controls">
                            <input type="text" id="rol" name="rol" readOnly value="3OkqwOsjKkjAbSgF5UXW" autoComplete="off" style={display} className="col-10" />
                        </div>
                        </div>
                    
                        <div className="control-group">
                        <label className="control-label" htmlFor="dependenciesSelect">Seleccione Dependencia(s) 
                            <span className="text-danger" style={{cursor: 'pointer',}} onClick={() => this.putOptions()}> <i className="fas fa-sync-alt"></i></span></label>
                            <select className="col-10" id="dependenciesSelect" name="dependenciesSelect" size='5' multiple>
                                
                            </select>
                        </div>
        
                        <div className="control-group mt-4">
                        <div className="controls">
                            <button type="submit" className="btn btn-success">Registrarse</button>
                        </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }

    handleSubmit(event) {
        event.preventDefault();
        let docC = document.getElementById("dependenciesSelect");
        let sel = [];
        for (var i =0; i < docC.options.length; i++) {
            if ( docC.options[i].selected ) {
                sel.push(docC.options[i].id);
            }
        }
        let t = document.getElementById("valid_until").value;
        var date = new Date(t ? t:1603844363);
        var timestamp = date.getTime();
        let user = {
            active: true,
            dependencies: sel,
            email: document.getElementById("email").value,
            name: document.getElementById("username").value,
            last_name: document.getElementById("last_name").value,
            password: document.getElementById("username").value,
            rol: "3OkqwOsjKkjAbSgF5UXW",
            valid_until: timestamp,
        };
        console.log(user);
        if ( !this.checkFields(user) ) {
            document.getElementById("error").innerHTML = "<span style='color:red;'>Error, verifique los campos</span>";
        } else {
            this.submit(user);
        }
    }

    checkFields = (user) => {
        if ( user.dependencies.length<1 || user.email==='' || user.name==='' || user.last_name==='' || user.password.length<4 || user.valid_until<=(new Date()).getTime()  ) {
            return false;
        }
        return true;
    }

    submit = (user) => {
        this.state.db.collection("users").doc(user.email).set(user).then(() => window.location.href = "../");
    }

    getDependencies = () => {
        let dependencies = [];
        this.state.db
        .collection("dependencies")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let u = doc.data();
                let dep = {
                    id: doc.id,
                    name: u.name,
                    coordinator: u.coordinator,
                    max_users: u.max_users,
                    users: [],
                }
                dependencies.push(dep);
            });});
        return dependencies;
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

    putOptions = (elId = "dependenciesSelect") => {
        let array = [];
        let dependencies = this.getDependencies();
        let user_dependency = this.getUserDependency();
        setTimeout(() => { array = this.linked(dependencies,user_dependency) },700);
        setTimeout(() => this.chargeOptions(elId,array),1000);
    }

    componentDidMount = () => {
        this.putOptions();
    };

    render() {
        return(
            <div className="container">
                {this.Form1()}
            </div>
        );
    
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.user,
    }
};

export default connect(mapStateToProps)(UserCreate);