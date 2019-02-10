import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangetitle = this.onChangetitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            title: '',
            description: '',
            date:''
        }
    }
    onChangetitle(e) {
        this.setState({
        title: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({
        description: e.target.value
        })  
    }
    onChangeDate(e) {
        this.setState({
        date: e.target.value
        })
    }
  
    onSubmit(e) {
        e.preventDefault();
            const obj = {
            title: this.state.title,
            description: this.state.description,
            date: this.state.date
        };

        axios.post('http://localhost:4000/api/expenses', obj)
            .then(res => console.log(res.data));
        
        this.setState({
            title: '',
            description: '',
            date: ''
        })
    }
    
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add new Expense</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add title:  </label>
                        <input type="text" className="form-control" value={this.state.title} onChange={this.onChangetitle}/>
                    </div>
                    <div className="form-group">
                        <label>Add description: </label>
                        <input type="text" className="form-control" value={this.state.description} onChange={this.onChangeDescription}/>
                    </div>
                    <div className="form-group">
                        <label>Add date: </label>
                        <input type="date" className="form-control" value={this.state.date} onChange={this.onChangeDate}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Save" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}