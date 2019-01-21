import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICE = {
  meat: 0.5,
  cheese: 0.6,
  bacon: 0.4,
  salad: 0.7
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 1,
      cheese: 2,
      bacon: 1,
      salad: 2
    },
    totalPrice: 0
  };

  addIngredientHandler = type => {
    console.log(type);
    const count = this.state.ingredients[type];
    const updatedCount = count + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;

    const currentTotalPrice = this.state.totalPrice;
    const priceAddition = INGREDIENTS_PRICE[type];
    const updatedTotalPrice = currentTotalPrice + priceAddition;

    this.setState({
      totalPrice: updatedTotalPrice,
      ingredients: updatedIngredients
    });
  };

  removeIngredientHandler = type => {
    const count = this.state.ingredients[type];
    const updatedCount = count - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;

    const currentTotalPrice = this.state.totalPrice;
    const priceDeduction = INGREDIENTS_PRICE[type];
    const updatedTotalPrice = currentTotalPrice - priceDeduction;

    this.setState({
      totalPrice: updatedTotalPrice,
      ingredients: updatedIngredients
    });
  };

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
        />
      </>
    );
  }
}

export default BurgerBuilder;
