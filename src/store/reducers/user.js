const INITIAL_STATE = {
  dadosUsuario: {
    nome: "Matheus Felipe Rodrigues de Carvalho",
    cargo: "Programador Front End",
    email: "matheus@seox.com.br",
  },
};

export default function user(state = INITIAL_STATE, action) {
  if (action.type === "UPDATE_USER_DATA") {
    return {
      ...state,
      dadosUsuario: action.dadosUsuario,
    };
  }
  return state;
}
