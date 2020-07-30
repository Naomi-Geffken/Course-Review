import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";



class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {    
        this.setState({value: event.target.value});  
    }
    
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to your new Project!</h1>    
                </header>
                <h1>Add a Course</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                      College's name: 
                      <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
                    <label>
                      Department Name: 
                      <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
                    
                    <label>
                      Course Number: 
                      <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
                    
                    <label>
                      Rating: 
                      <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
                    <input type="submit" value="Submit" />
                </form>
                <p className="App-intro">{this.state.apiResponse}</p>

            </div>

               
            
            
            // Create a way for users to input a college’s name, department name, 
            // the course number, and its associated rating. This will call the API
            // in the backend so that the data will be stored. For now, the UI can be a very simple single page.

            // TODO: Create a way to Add information about a course

        );
    }
}

export default App;