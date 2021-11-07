import React from "react";
import { connect } from "react-redux";

const UserInfos = ({ userData }) => {
  return (
    <div class="dados-usuario">
      <h2>Dados do Usuário: </h2>
      {userData.nome ? (
        <ul>
          <li>
            <h4>Nome: </h4>
            <p>{userData.nome}</p>
          </li>
          <li>
            <h4>Email: </h4>
            <p>{userData.email}</p>
          </li>
          <li>
            <h4>Cargo: </h4>
            <p>{userData.cargo}</p>
          </li>
        </ul>
      ) : (
        <p>Não existem dados de usuário</p>
      )}
    </div>
  );
};

export default connect((state) => ({ userData: state.user.dadosUsuario }))(
  UserInfos
);
