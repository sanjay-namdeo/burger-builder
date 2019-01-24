import React from 'react';

const orderSummary = props => {
  const ingredientsList = Object.keys(props.ingredients).map(elementKey => {
    return (
      <li>
        <strong>{elementKey}</strong>: {props.ingredients[elementKey]}
      </li>
    );
  });
  return (
    <>
      <p>Your delicious burder is ready!</p>
      <ul>{ingredientsList}</ul>
    </>
  );
};

export default orderSummary;
