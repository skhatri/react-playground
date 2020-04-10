import React from "react";
import "./App.css";
import Navigate from "./layout/navigation/components/Navigate";
import { DefaultFragment as DefaultTodoLayout } from "./layout/todo/DefaultFragment";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid w-100">
        <Navigate />
        <DefaultTodoLayout />
      </div>
    );
  }
}

export default App;
