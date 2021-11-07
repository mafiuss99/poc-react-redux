import React, { Component } from "react";

import { connect } from "react-redux";
import { updateUserDataRedux } from "../store/actions/user";

class UserForm extends Component {
  constructor({ userData, dispatch }) {
    super();

    this.dispatch = dispatch;

    this.state = {
      nome: userData.nome,
      email: userData.email,
      cargo: userData.cargo,
    };
  }

  updateNome = (e) => {
    this.setState({
      nome: e.target.value,
    });
  };

  updateEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  updateCargo = (e) => {
    this.setState({
      cargo: e.target.value,
    });
  };

  updateUserData = (e) => {
    e.preventDefault();
    this.dispatch(updateUserDataRedux(this.state));
  };

  render() {
    return (
      <div class="formulario-usuario">
        <h2>Atualizar Dados: </h2>
        <form>
          <label for="Nome">
            Nome do Usuário:
            <br />
            <input
              placeholder="Nome do Usuário"
              name="Nome"
              value={this.state.nome}
              onChange={(e) => this.updateNome(e)}
            />
          </label>
          <label for="Nome">
            Email do Usuário
            <br />
            <input
              placeholder="Email do Usuário"
              name="Email"
              value={this.state.email}
              type="email"
              onChange={(e) => this.updateEmail(e)}
            />
          </label>
          <label for="Cargo">
            Cargo: <br />
            <input
              placeholder="Cargo"
              name="Cargo"
              value={this.state.cargo}
              onChange={(e) => this.updateCargo(e)}
            />
          </label>
          <button onClick={(e) => this.updateUserData(e)} type="submit">
            Atualizar
          </button>
        </form>
      </div>
    );
  }
}

export default connect((state) => ({ userData: state.user.dadosUsuario }))(
  UserForm
);
