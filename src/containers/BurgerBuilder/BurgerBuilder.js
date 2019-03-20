import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';
import OrderSummary from './../../components/OrderSummary/OrderSummary';
import Modal from './../../components/UI/Modal/Modal';
import axios from './../../axios';
import Spinner from './../../components/UI/Spinner/Spinner';
import WithErrorHandler from './../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENTS_PRICE = {
  meat: 0.5,
  cheese: 0.6,
  bacon: 0.4,
  salad: 0.7
};
class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    axios.get('/ingredients.json').then((res)=> {
      console.log(res);
      this.setState({ingredients: res.data});
    }).catch((error)=>{
      this.setState({error: true})
    });
  }

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
    this.setState({ purchasing: false });
  };

  purchaseContineHandler = () => {
    this.setState({ loading: true })

    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice
    };
    axios.post('/orders.json', order)
      .then(res => {
        this.setState({ loading: false, purchasing: false })
      })
      .catch(error => {
        this.setState({ loading: false, purchasing: false });
      });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = this.state.ingredients[key] <= 0;
    }

    let orderSummary = <Spinner/>
    
    let burger = this.state.error ?<p>Ingredients cannot be loaded</p> : <Spinner/>;
    if(this.state.ingredients) {
      burger = (
        <>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls addIngredient={this.addIngredientHandler} removeIngredient={this.removeIngredientHandler} disabledInfo={disabledInfo} totalPrice={this.state.totalPrice.toFixed(2)} purchasable={this.state.purchasable} purchasing={this.purchasingHandler} />
        </>
      );
      orderSummary = <OrderSummary ingredients={this.state.ingredients} totalPrice={this.state.totalPrice.toFixed(2)} purchaseCancelled={this.purchaseCancelledHandler} purchaseContinue={this.purchaseContineHandler} />;
    }

    if(this.state.loading) {
      orderSummary = <Spinner/>
    }

    return <>
      <Modal show={this.state.purchasing} purchasingCancelled={this.purchaseCancelledHandler}>
      {orderSummary}
      </Modal>
      {burger}
      </>;
  }
}

export default WithErrorHandler(BurgerBuilder, axios);
