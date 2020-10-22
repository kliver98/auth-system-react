import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';
import firebase from '../../config/firebase';
import DepItem from './DepItem';
import DepUpdate from './DepUpdate';
import ReactDOM from 'react-dom'

export default class DepSearch extends Component {
    constructor() {
        super();
        this.state = {
          dependencies: [],
          user_dependency: [],
          db: firebase.firestore(),
        };
    }

    getDependencies = () => {
        let dependencies = [];
        this.state.db
          .collection("dependencies")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let u = doc.data();
                let dependency = {
                    id: doc.id,
                    active: u.active,
                    coordinator: u.coordinator,
                    location: u.location,
                    max_users: u.max_users,
                    name: u.name,
                    users: [],
                }
                dependencies.push(dependency);
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

    chargeDependencies = (domElement) => {
        document.getElementById(domElement).innerHTML = '';
        var array = this.state.dependencies;
        for (var i=0; i < array.length; i++) {
            array[i].users = this.state.user_dependency.find(x => x.id===array[i].id);
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
        array = array.map(dependency => (
            <DepItem dependency={dependency} key={dependency.id} changeToUpdate={this.changeToUpdate}/>
        ));
        ReactDOM.render(array,document.getElementById(domElement));
    }

    changeToUpdate = (dependency) => {
        let doc = document.getElementById("founds");
        doc.unmountComponentAtNode  = true;
        ReactDOM.render(<DepUpdate dependency={dependency}/>,doc);
    }

    componentDidMount = () => {
        setTimeout(() => this.chargeDependencies("founds"),800);
    };

    render() {
        this.state.user_dependency = this.getUserDependency();
        this.state.dependencies = this.getDependencies();
        return(
            <div className="container">
                <h1>Gestionar Dependencias</h1>
                <ProgressBar className="mb-5" variant="info" now={100} />
                <div id="founds"></div>
            </div>
        );
    
    }
}