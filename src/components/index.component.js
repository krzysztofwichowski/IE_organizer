import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {expenses: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/api/expenses')
        .then(response => {
          this.setState({ expenses: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
        return this.state.expenses.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
        return (
        <div>
            <h3 align="center">Expenses List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
                <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Date</th>
                <th colSpan="2">Action</th>
                </tr>
            </thead>
            <tbody>
                { this.tabRow() }
            </tbody>
            </table>
        </div>
        );
    }
  }