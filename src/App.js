import { Component } from "react/cjs/react.production.min";
import { Provider } from "react-redux";

import UserForm from "./components/UserForm";
import UserInfos from "./components/UserInfos";

import store from "./store";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <UserInfos />
          <hr />
          <UserForm />
        </Provider>
      </div>
    );
  }
}

export default App;
