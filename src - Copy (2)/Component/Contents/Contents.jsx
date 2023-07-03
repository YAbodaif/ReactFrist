import React, { Component } from 'react'
import Cards from '../Cards/Cards'
export default class Contents extends Component {
    state={
      
       product:[
        {id:1,title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",price:109.95,description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",category:"men's clothing",image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",rating:{rate:3.9,count:120}}]
      
    }
  render() {
    return <>
  <div className="row">
    <Cards  productinfo = {this.state.product[0]} />
    {/* {this.state.product.map((index)=> <Cards productinfo={index}/>)} */}
    </div>
    </>
    
  }
}
