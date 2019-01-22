import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(element => {
      return [...Array(props.ingredients[element])].map((_, index) => {
        return <BurgerIngredient key={element + index} type={element} />;
      });
    })
    .reduce((arr, ele) => arr.concat(ele));

  if (transformedIngredients.length <= 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
