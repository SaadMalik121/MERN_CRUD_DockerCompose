import React, { Component } from "react";
import { Link } from "react-router-dom";
import ItemService from "./ItemService";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.addItemService = new ItemService();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.addItemService.deleteData(this.props.obj._id);
    window.location.reload();
  };

  render() {
    return (
      <tr>
        <td>{this.props.obj._id}</td>
        <td>{this.props.obj.item}</td>
        <td>
          <Link to={"edit/" + this.props.obj._id} className="btn btn-primary">
            Edit
          </Link>
        </td>
        <td>
          <form onSubmit={this.handleSubmit}>
            <input type="submit" value="Delete" className="btn btn-danger" />
          </form>
        </td>
      </tr>
    );
  }
}

export default TableRow;
