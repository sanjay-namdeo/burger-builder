import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const ingredients = [
  { type: 'meat', label: 'Meat' },
  { type: 'cheese', label: 'Cheese' },
  { type: 'bacon', label: 'Bacon' },
  { type: 'salad', label: 'Salad' }
];

const BuildControls = props => (
  <div className={classes.BuildControls}>
    {ingredients.map(ingredient => {
      return (
        <BuildControl
          key={ingredient.type}
          label={ingredient.label}
          added={() => props.addIngredient(ingredient.type)}
          removed={() => props.removeIngredient(ingredient.type)}
        />
      );
    })}
  </div>
);

export default BuildControls;
