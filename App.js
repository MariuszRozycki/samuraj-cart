class App extends React.Component {
  state = {
    avaliableProducts: 9,
    shoppingCart: 1
  }

  handleRemoveFromCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart - 1
    })
  }

  handleAddToCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1
    })
  }

  handleRemoveFromAvaliable = (e) => {
    // e.preventDefault();
    this.setState({
      avaliableProducts: this.state.avaliableProducts - this.state.shoppingCart,
      shoppingCart: 0
    })
    console.log('Avaliable products:', this.state.avaliableProducts - this.state.shoppingCart);
    console.log('You have bought:', this.state.shoppingCart);
  }

  render() {
    const { shoppingCart, avaliableProducts } = this.state;
    const style = shoppingCart === 0 ? { opacity: 0.3 } : {};

    return (
      <div>
        <button disabled={shoppingCart ? false : true} onClick={this.handleRemoveFromCart}>-</button>
        <span style={style}>{shoppingCart}</span>
        <button disabled={shoppingCart === avaliableProducts ? true : false} onClick={this.handleAddToCart}>+</button>
        {shoppingCart > 0 && <button onClick={this.handleRemoveFromAvaliable}>BUY</button>}
        <p>Quantity of avaliable products: {avaliableProducts - shoppingCart}</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));