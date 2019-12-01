import MyContext from "./MyContext";
import React, { Fragment } from "react";
import Car from "./Car";

const Cars = () => (
  <MyContext.Consumer>
    {context => (
      <Fragment>
        <h4>Cars:</h4>
        {Object.keys(context.cars).map(carID => (
          <Fragment>
          <Car
            key={carID}
            name={context.cars[carID].name}
            price={context.cars[carID].price}
            incrementPrice={() => context.incrementPrice(carID)}
            decrementPrice={() => context.decrementPrice(carID)}
          />
          <p>{carID}</p>
          </Fragment>
        ))}
      </Fragment>
    )}
  </MyContext.Consumer>
);

export default Cars;
