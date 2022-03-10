import React from "react";

export default function App() {
  return (
    <div class="container">
      <h3> Welcome To Coding World </h3>
      <h5>BY clicking you Can get the Value</h5>

      <div class="quantity">
        <a class="quantity_minus" title="Decrement">
          <span>-</span>
        </a>
        <input name="quantity" type="text" class="quantity_input" value="0" />
        <a class="quantity_plus" title="Increment">
          <span>+</span>
        </a>
      </div>
    </div>
  );
}
