import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
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
    componentDidMount() {
        axios.get('http://localhost:4000/api/expenses/'+this.props.match.params.id)
            .then(response => {
                this.setState({ 
                  title: response.data.title, 
                  description: response.data.description,
                  date: response.data.date });
            })
            .catch(function (error) {
                console.log(error);
            })
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

        axios.put('http://localhost:4000/api/expenses/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
    
        this.props.history.push('/index');
    }
    
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Edit existing Expense</h3>
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