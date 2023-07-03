import React, { Component } from 'react'

export default class Cards extends Component{

    render(){
        let{title,price,description,image}=this.props.productinfo;
        return<>
            <div className="p-2 col-3">
            <div className="card align-items-center" >
                   <img src={image} className="card-img-top w-50" alt={title}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h5 className="card-title text-danger">{price} L.E</h5>
                        <p className="card-text">{description}</p>
                        <a href="#" className="btn btn-primary">Add to cart</a>
                    </div>
                </div>
            </div>
        </>
    }
}

