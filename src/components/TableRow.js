import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {
    
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.delete('http://localhost:4000/api/expenses/'+this.props.obj.id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }

render() {
    return (
        <tr>
            <td>
                {this.props.obj.title}
            </td>
            <td>
                {this.props.obj.description}
            </td>
            <td>
                 {this.props.obj.date}
            </td>
            <td>
                <Link to={"/edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
            </td>
            <td>
                <button onClick={this.delete} className="btn btn-danger">Delete</button>
            </td>
        </tr>
    );
  }
}

export default TableRow;