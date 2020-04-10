import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  isDone() {
    return this.props.item.status === "DONE";
  }

  getStyleName() {
    return this.isDone() ? "table-success strikethrough" : "";
  }

  componentWillMount() {
    this.setState({
      checked: this.isDone(),
      edit: false,
      item: {},
    });
  }

  prepareEdit() {
    let item = {
      description: this.props.item.description,
      status: this.props.item.status,
      action_by: this.props.item.action_by,
      id: this.props.item.id,
    };
    this.setState({
      checked: this.isDone(),
      edit: !this.state.edit,
      item: item,
    });
    console.log("---edit---");
    console.log(this.state.item, item);
    console.log("---end edit---");
  }

  onEditCompletion() {
    let item = {};
    this.setState({
      checked: this.isDone(),
      edit: false,
      item: item,
    });
  }

  updateStatus() {
    this.props.onStatusUpdate({
      id: this.props.item.id,
      checked: !this.state.checked,
    });
    this.setState({ checked: !this.state.checked });
  }

  displayData() {
    const { description, id, status } = this.props.item;

    return (
      <tr className={this.getStyleName()}>
        <td>
          <input
            type="checkbox"
            onChange={this.updateStatus.bind(this)}
            checked={this.state.checked}
          />
        </td>
        <td>{description}</td>
        <td>{this.props.item.action_by}</td>
        <td>{this.props.item.status}</td>
        <td>{this.props.item.created}</td>
        <td>{this.props.item.updated}</td>
        <td>
          <a href="#">
            <span
              className="oi oi-pencil"
              onClick={this.prepareEdit.bind(this)}
            />
          </a>{" "}
          <a href="#" onClick={this.props.onDeleteItem.bind(this, id)}>
            <span className="oi oi-trash" />
          </a>
        </td>
      </tr>
    );
  }

  onSubmitAdd(e) {
    e.preventDefault();
    this.props.onUpdateTodoItem(this.state);
    this.onEditCompletion();
  }

  updateFormAttributes = (ev) => {
    let item = this.state.item;
    item[[ev.target.name]] = ev.target.value;

    this.setState({
      item: item,
      edit: this.state.edit,
      checked: this.state.checked,
    });
  };

  displayForm() {
    return (
      <tr>
        <td colSpan="7">
          <div className="container">
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <form
              onSubmit={this.onSubmitAdd}
              className="form-inline alert alert-primary"
            >
              <div className="form-group mb-2">
                <input type="hidden" value={this.state.item.id} name="id" />
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  value={this.state.item.description}
                  onChange={this.updateFormAttributes.bind(this)}
                  placeholder="Description..."
                />
                &nbsp;
              </div>
              <div className="form-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  name="action_by"
                  value={this.state.item.action_by}
                  onChange={this.updateFormAttributes.bind(this)}
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
                  value={this.state.item.status}
                  onChange={this.updateFormAttributes.bind(this)}
                />
                &nbsp;
              </div>
              &nbsp;
              <button
                id="update-button"
                className="btn btn-primary mb-2"
                type="button"
                onClick={this.onSubmitAdd.bind(this)}
              >
                Update
              </button>
              &nbsp;
              <button
                id="cancel-button"
                className="btn btn-secondary mb-2"
                type="button"
                onClick={this.onEditCompletion.bind(this)}
              >
                Cancel
              </button>
            </form>
          </div>
        </td>
      </tr>
    );
  }

  render() {
    return this.state.edit ? this.displayForm() : this.displayData();
  }
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default TodoItem;
