import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class TodoList extends React.Component {
  render() {
    return (
      <div className="container-fluid w-100">
        <div className="container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th></th>
                <th>Description</th>
                <th>Action By</th>
                <th>Status</th>
                <th>Created</th>
                <th>Updated</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.items.map((item) => {
                return (
                  <TodoItem
                    key={item.id}
                    item={item}
                    onStatusUpdate={this.props.onStatusUpdate}
                    onDeleteItem={this.props.onDeleteItem}
                    onUpdateTodoItem={this.props.onUpdateTodoItem}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

TodoList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TodoList;
