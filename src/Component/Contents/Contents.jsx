import React, { Component } from 'react'
import Cards from '../Cards/Cards'
async function logJSONData() {
  const response = await fetch("https://fakestoreapi.com/products?limit=5");
  const jsonData = await response.json();
  return jsonData;
}
let datainfo=[];
datainfo=await logJSONData();
export default class Contents extends Component {
    state={
        Product:datainfo
    }
  render() {
    return <>
  <div className="row">
    {/* <Cards  productinfo = {this.state.product[0]} /> */}
    {this.state.Product.map((x)=> <Cards productinfo={x}/>)}
    {console.log(this.state.productinfo)}
    </div>
    </>
    
  }
}
