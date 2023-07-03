import React, { Component } from 'react'

export default class Cards extends Component{

    render(){
        let{id,name,descrp}=this.props.productinfo;
        return<>
            <div className="p-2 col-4">
            <div className="card " >
                   <img src="./images/1.png" className="card-img-top" alt={id}/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{descrp}</p>
                        <a href="#" className="btn btn-primary">Add to cart</a>
                    </div>
                </div>
            </div>
        </>
    }
}

