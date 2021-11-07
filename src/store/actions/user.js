export function updateUserDataRedux(data) {
  return {
    type: "UPDATE_USER_DATA",
    dadosUsuario: data,
  };
}
