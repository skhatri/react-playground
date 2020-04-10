import React, { Component } from "react";
import TodoList from "./components/TodoList";
import AddItem from "./components/AddItem";

export class DefaultFragment extends Component {
  componentWillMount() {
    this.setState({
      todoList: [
        {
          id: "1",
          description: "List Todo",
          action_by: "user1",
          created: "2020-03-20T00:00:00",
          status: "DONE",
          updated: null,
        },
        {
          id: "2",
          description: "Edit Todo",
          action_by: "user1",
          created: "2020-03-20T13:00:00",
          status: "DONE",
          updated: "2020-03-20T13:00:00",
        },
        {
          id: "3",
          description: "Add Router",
          action_by: "user1",
          created: "2020-03-20T13:00:00",
          status: "NEW",
          updated: "2020-03-20T13:00:00",
        },
        {
          id: "4",
          description: "Add Nth Fibonacci",
          action_by: "user1",
          created: "2020-03-20T13:00:00",
          status: "NEW",
          updated: "2020-03-20T13:00:00",
        },
      ],
    });
  }

  upsertItem(action, data) {
    let item = data.item;
    console.log(action, item);
    if (action === "add") {
      item.id = String(new Date().getTime());
      this.setState({ todoList: [...this.state.todoList, item] });
    } else {
      this.setState({
        todoList: this.state.todoList.map((currItem) => {
          if (currItem.id === item.id) {
            return item;
          }
          return currItem;
        }),
      });
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
    this.setState({
      todoList: this.state.todoList.filter((item) => item.id !== itemId),
    });
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
