import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';
import OrderSummary from './../../components/OrderSummary/OrderSummary';
import Modal from './../../components/UI/Modal/Modal';

const INGREDIENTS_PRICE = {
  meat: 0.5,
  cheese: 0.6,
  bacon: 0.4,
  salad: 0.7
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 0,
      cheese: 0,
      bacon: 0,
      salad: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  };

  updatePurchasable(ingredients) {
    const sum = Object.keys(ingredients)
      .map(element => {
        return ingredients[element];
      })
      .reduce((sum, ele) => sum + ele);

    this.setState({ purchasable: sum > 0 });
  }

  addIngredientHandler = type => {
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

    this.updatePurchasable(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const count = this.state.ingredients[type];
    if (count <= 0) return;
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

    this.updatePurchasable(updatedIngredients);
  };

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelledHandler = () => {
    this.setState({purchasing: false})
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = this.state.ingredients[key] <= 0;
    }

    return <>
        <Modal show={this.state.purchasing} purchasingCancelled={this.purchaseCancelledHandler}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls addIngredient={this.addIngredientHandler} removeIngredient={this.removeIngredientHandler} disabledInfo={disabledInfo} totalPrice={this.state.totalPrice.toFixed(2)} purchasable={this.state.purchasable} purchasing={this.purchasingHandler} />
      </>;
  }
}

export default BurgerBuilder;
