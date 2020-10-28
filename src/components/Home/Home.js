import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return <div className="container">
      <h1>Bienvenido</h1>
      <hr/><br /><br /><br /><br /><br />
      <p>En este página web podra adminsitrar cuentas de usuario que estan en dependencias.</p>
      <p>Actualmente solo puede gestionar dependencias y crear usuarios, pero estamos trabajando para mejorar :)</p>

      <br />
      <p>En la parte superior derecha encontrara las opciones. Solo debe darle click al simbolo de la flecha.</p>
    </div>;
  }
}
