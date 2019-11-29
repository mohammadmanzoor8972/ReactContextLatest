import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import MyProvider from "./MyProvider";
import ProductList from "./ProductList";

class App extends Component {
  render() {
    const logo = "";
    return (
      <MyProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to my web store</h1>
          </header>
          <ProductList />
        </div>
      </MyProvider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
