import React from "react";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h3> Welcome To Coding World </h3>
      <h5>BY clicking you Can get the Value</h5>

      <div classNamme="quantity">
        <a
          classNamme="quantity_minus"
          title="Decrement"
          onClick={() => dispatch(decNumber())}
        >
          <span>-</span>
        </a>
        <input
          name="quantity"
          type="text"
          classNamme="quantity_input"
          value={myState}
        />
        <a
          classNamme="quantity_plus"
          title="Increment"
          onClick={() => dispatch(incNumber())}
        >
          <span>+</span>
        </a>
      </div>
    </div>
  );
};

export default App;
