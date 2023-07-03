import React, { Component } from 'react'
import Cards from '../Cards/Cards'
export default class Contents extends Component {
    state={
      
       product:[
        {id:10,name:'Toshipa' , descrp:'aaaaaaa aaaaa aaaaaaaa aaaaaaaaaaa' },
        {id:11,name:'Toshipa' , descrp:'aaaaaaa aaaaa aaaaaaaa aaaaaaaaaaa' },
        {id:12,name:'Toshipa' , descrp:'aaaaaaa aaaaa aaaaaaaa aaaaaaaaaaa' }]
    }
  render() {
    return <>
  <div className="row">
    {this.state.product.map((index)=> <Cards productinfo={index}/>)}
    </div>
    </>
    
  }
}
