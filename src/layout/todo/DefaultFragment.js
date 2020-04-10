import React, { Component } from "react";
import TodoList from "./components/TodoList";
import AddItem from "./components/AddItem";
import TodoClient from "./api/todo_api";

export class DefaultFragment extends Component {
  constructor() {
    super();
    this.todoClient = new TodoClient();
  }

  componentWillMount() {
    this.setState({ todoList: [] });
    this.refreshItems();
  }

  refreshOnComplete = (data, err) => {
    if (err !== undefined) {
      console.log("error", err);
    }
    this.refreshItems();
  };

  refreshItems() {
    this.todoClient.listItems((data, err) => {
      if (err !== undefined) {
        console.log("error", err);
      } else {
        this.setState({ todoList: data });
      }
    });
  }

  upsertItem(action, data) {
    let item = data.item;
    console.log(action, item);
    if (action === "add") {
      this.todoClient.addItem(item, this.refreshOnComplete);
    } else {
      this.todoClient.updateItem(item, this.refreshOnComplete);
    }
  }

  onStatusUpdate(itemId) {
    this.setState({
      todoList: this.state.todoList.map((item) => {
        if (item.id === itemId.id) {
          item.status = itemId.checked ? "DONE" : "NEW";
        }
        return item;
      }),
    });
  }

  onDeleteItem(itemId) {
    this.todoClient.deleteItem(itemId, this.refreshOnComplete);
  }

  render() {
    return (
      <React.Fragment>
        <AddItem addTodoItem={this.upsertItem.bind(this, "add")} />
        <TodoList
          items={this.state.todoList}
          onStatusUpdate={this.onStatusUpdate.bind(this)}
          onDeleteItem={this.onDeleteItem.bind(this)}
          onUpdateTodoItem={this.upsertItem.bind(this, "update")}
        />
      </React.Fragment>
    );
  }
}

export default DefaultFragment;
