import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BASE, GET_DEPENDENCIES } from '../../actions/constants';
import firebase from '../../config/firebase';
import getDependencies from '../../actions/dependency';

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
    chargeOptions(domElement) {
        this.props.getDependencies();
        var array = this.props.dependencies;

        var select = document.getElementsByName(domElement)[0];
        while (select.options.length>0) {
            select.remove(0);
        }

        for (let value in array) {
        
        var option = document.createElement("option");
        option.id = array[value].id
        option.text = array[value].name;
        select.add(option);
        }
    }
    Form1() {
        let t = [];
        return (
            <div className="col-12">
                <form className="form-horizontal" action='' method="POST">
                    <fieldset>
                        <div id="legend">
                        <legend className="">Registrarse</legend>
                        </div>
                        <div className="progress mb-2">
                            <div className="progress-bar bg-info" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    
                        <div className="control-group">
                        <label className="control-label" htmlFor="email">E-mail</label>
                        <div className="controls">
                            <input type="text" id="email" name="email" placeholder="example@correo.com" autoComplete="off" className="col-10" />
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
                            <span className="text-danger" style={{cursor: 'pointer',}} onClick={() => this.chargeOptions("dependenciesSelect")}> De click (2) dos veces para cargar</span></label>
                            <select className="col-10" id="dependenciesSelect" name="dependenciesSelect" size='5' multiple>
                                
                            </select>
                        </div>
        
                        <div className="control-group mt-4">
                        <div className="controls">
                            <button className="btn btn-success">Register</button>
                        </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }

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
      dependencies: state.dependencies
    }
};

const mapDispatchToProps = {
    getDependencies,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCreate);