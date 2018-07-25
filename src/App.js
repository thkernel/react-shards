
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header";
import Service from "./components/service/service";
import Blog from "./components/blog/blog";

class App extends Component {
  
    render() {
        return (
            <div>
                <Header color="red"></Header>
                <Header color="blue"></Header>
                <Service></Service>
                <Blog></Blog>
            </div>
        );
    }
}

export default App;