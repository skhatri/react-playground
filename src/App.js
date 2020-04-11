import React from "react";
import "./App.css";
import Navigate from "./layout/navigation/components/Navigate";
import { BrowserRouter, Route } from "react-router-dom";
import { DefaultFragment as DefaultTodoLayout } from "./layout/todo/DefaultFragment";
import { DefaultFragment as GeneralLayout } from "./layout/general/DefaultFragment";

import store from "./redux/stores";
import { Provider } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="container-fluid w-100">
            <Navigate />
            <Route exact path="/">
              <DefaultTodoLayout />
            </Route>
            <Route path="/widgets">
              <GeneralLayout />
            </Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
