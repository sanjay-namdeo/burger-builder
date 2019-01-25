import React from 'react';
import Button from './../UI/Button/Button';

const orderSummary = props => {
  const ingredientsList = Object.keys(props.ingredients).map(elementKey => {
    return <li key={elementKey}>
        {elementKey}: <strong>{props.ingredients[elementKey]}</strong>
      </li>;
  });
  return <>
      <h3>Order Summary:</h3>
      <p>Your delicious burder is ready with-</p>
      <ul>{ingredientsList}</ul>
      <p>Total Price: <strong>{props.totalPrice}</strong></p>
      <Button class='Success' click={props.purchaseContinue}>CONTINUE</Button>
      <Button class='Danger' click={props.purchaseCancelled}>CANCEL</Button>
    </>;
};

export default orderSummary;
