import MyContext from "./MyContext";
import { Component } from "react";
import React from "react";
class MyProvider extends Component {
  state = {
    cars: [
       { name: "Honda", price: 100 },
     { name: "BMW", price: 150 },
      { name: "Mercedes", price: 200 },
      { name: "Baleno", price: 100 }
    ],
    mobiles: [
      {name: "Nokia", price:123},
      {name: "Samsung", price:321}
    ]
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          mobile: this.state.mobiles,
          cars: this.state.cars,
          incrementPrice: selectedID => {
            const cars = { ...this.state.cars };
            cars[selectedID].price = cars[selectedID].price + 1;
            this.setState({
              cars
            });
          },
          decrementPrice: selectedID => {
            const cars = { ...this.state.cars };
            cars[selectedID].price = cars[selectedID].price - 1;
            this.setState({
              cars
            });
          }
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
