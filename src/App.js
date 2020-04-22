import React from "react";
import "./App.css";
import Navigate from "./layout/navigation/components/Navigate";
import { BrowserRouter, Route } from "react-router-dom";

import { DefaultFragment as DefaultTodoLayout } from "./layout/todo/DefaultFragment";
import { DefaultFragment as GeneralLayout } from "./layout/general/DefaultFragment";
import { SignInFragment as SignInLayout } from "./layout/user/SignInFragment";
import { SignOutFragment as SignOutLayout } from "./layout/user/SignOutFragment";
import {ChangePasswordFragment as ChangePasswordLayout} from "./layout/user/ChangePasswordFragment";

import store from "./app/stores";
import { Provider } from "react-redux";
import {SignOutOnChange} from "./layout/user/SignOutOnChange";
import {ProfileFragment as ProfileLayout} from "./layout/user/ProfileFragment";


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="container-fluid w-100">
            <Navigate />
            <Route exact path="/todo">
              <DefaultTodoLayout />
            </Route>
            <Route exact path="/">
              <GeneralLayout />
            </Route>
            <Route exact path="/signin">
              <SignInLayout />
            </Route>
            <Route exact path="/signout">
              <SignOutLayout/>
            </Route>
            <Route exact path="/signout-on-change">
              <SignOutOnChange/>
            </Route>
            <Route exact path="/changepw">
              <ChangePasswordLayout/>
            </Route>

            <Route exact path="/profile">
              <ProfileLayout />
            </Route>

          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
