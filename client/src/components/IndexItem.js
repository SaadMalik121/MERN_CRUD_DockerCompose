import React, { Component } from "react";
import ItemService from "./ItemService";
import axios from "axios";
import TableRow from "./TableRow";
import { Link } from "react-router-dom";

class IndexItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      items: "",
    };
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:4200/items")
      .then((response) => {
        this.setState({
          items: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  tabRow = () => {
    if (this.state.items instanceof Array) {
      return this.state.items.map((object, i) => {
        return <TableRow obj={object} key={i} />;
      });
    }
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">MERN CRUD APPLICATION</h1>
        <br />
        <Link to={"add-item/"} className="btn btn-success">
          Add Item
        </Link>
        <br />
        <br />
        <table className="table table-striped">
          <thead>
            <tr>
              <td>Item Id</td>
              <td>Item Name</td>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
        <br />
        <hr />
      </div>
    );
  }
}

export default IndexItem;
