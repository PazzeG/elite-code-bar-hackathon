import React, { Component } from 'react';
import './Products.css';
import stock from './stock.json';

class Products extends Component {


    state = {
        cart: []
        
    }

    add = (product) => {
        this.setState(state => ({cart: [...state.cart, product]}))
    }

    total = () => {
        const total = this.state.cart.reduce((totalPrice, product) => totalPrice + product.price, 0);
        return total;
    }

    remove = (product) => {
        this.setState(state => {
            const cart = [...state.cart];
            const productIndex = cart.findIndex(p => p.name === product.name);
            if(productIndex < 0) {
                return;
            }
            cart.splice(productIndex, 1)
            return ({
                cart
            })
        })
    }
    
    

    render() {
    
        
        return(
            <div className="container">
                
                <div>
                <div className="desc-cocktail">Mon panier : {this.state.cart.length} produits !</div>
                <div className="desc-cocktail">Total : {this.total()}€</div>
                    {stock.map(product => 
                        <div key={product.name} className="article">
                            <div className="product">
                                <img className="bottle" src={product.image} alt={product.name} />
                                <span className="desc-cocktail" >{product.name}</span>         
                                <span className="desc-cocktail">{product.price}$</span>
                                <p className="desc-cocktail">{product.alcool[0].toUpperCase()} - {product.volume}</p>
                            </div>
                            <div className="buy">
                            <button className="add-buttton"onClick={() => this.add(product)}>+</button>
                            <button className="remove-buttton"onClick={() => this.remove(product)}>-</button>
                            </div>
                        </div>
                )}
                </div>
            </div>
        )
    }
};

export default Products;