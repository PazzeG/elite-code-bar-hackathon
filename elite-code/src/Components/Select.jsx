import React from 'react'
import axios from 'axios';
import Products from './Products';
import './Select.css'; 


export default class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cocktail: null,
            cart:[],
            tab:[]
            
        }
    }
    
    render() {
        return (
            <div>
            <div className="choice">
               <Products/>
            </div>
            </div>
        )
    }
}
