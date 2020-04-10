import React, { Component } from "react";
import PropTypes from "prop-types";

class AddItem extends Component {
  constructor() {
    super();
    this.state = {
      description: "",
      action_by: "",
      status: "",
    };
  }
  onSubmitAdd = (e) => {
    e.preventDefault();
    let item = { item: this.state };
    this.props.addTodoItem(item);
  };

  updateDesc = (ev) => this.setState({ [ev.target.name]: ev.target.value });

  render() {
    return (
      <div className="container">
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <form
          onSubmit={this.onSubmitAdd}
          className="form-inline alert alert-primary"
        >
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control"
              name="description"
              value={this.state.description}
              onChange={this.updateDesc.bind(this)}
              placeholder="Description..."
            />
            &nbsp;
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control"
              name="action_by"
              value={this.state.action_by}
              onChange={this.updateDesc.bind(this)}
              placeholder="Action By"
            />
            &nbsp;
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control"
              name="status"
              placeholder="Status"
              value={this.state.status}
              onChange={this.updateDesc.bind(this)}
            />
            &nbsp;
          </div>
          &nbsp;
          <button
            id="add-button"
            className="btn btn-primary mb-2"
            type="button"
            onClick={this.onSubmitAdd}
          >
            Add
          </button>
          &nbsp;
          <button
            id="add-button"
            className="btn btn-secondary mb-2"
            type="button"
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

AddItem.propTypes = {};
export default AddItem;
