import React, { useState, useEffect } from "react";
// import "./components/filterForm";
import API from "./utils/api";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Button, FormControl, InputGroup, Table } from "react-bootstrap";
import EmployeeTable from "./components/table";

class App extends React.Component {
  state = {
    randomUsers: [],
    filteredUsers: [],
  };

  componentDidMount() {
    this.getRandomUsers();
  }

  getRandomUsers = async () => {
    try {
      const response = await API.getRandomUsers();
      console.log(response.data.results);
      this.setState({
        randomUsers: response.data.results,
        filteredUsers: response.data.results,
      });
    } catch (error) {
      console.warn(error);
    }
  };

  handleSearch = (event) => {
    console.log(event.target.value);
    let selectedUser = event.target.value;

    this.setState({
      filteredUsers: this.state.randomUsers.filter((user) => {
        
        return user.name.first.includes(selectedUser);
      }),
    });
  };

  render() {
    return (
      <div>
        {/* // <div>{JSON.stringify(x)}</div> */}
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => this.handleSearch(e)}
          />

          <InputGroup.Append>
            <Button variant="outline-secondary">Search</Button>
          </InputGroup.Append>
        </InputGroup>
        <EmployeeTable
          randomUsers={this.state.filteredUsers}
        
        />
      </div>
    );
  }
}

export default App;
