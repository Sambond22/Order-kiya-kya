import React, { useState } from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faIndianRupeeSign} from "@fortawesome/free-solid-svg-icons"


const Fooditem = ({fooditem}) => {
    const [quantity]=useState(0);
    const [showButtons,setShowButtons]=useState(false);

    const showAddToCartButtons=()=>{
        setShowButtons(true);
    };

    return (
        <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
        <div className='card p-3 rounded'>
            <img className='card-img-top mx-auto'
                src={fooditem.images[0].url}
                alt={fooditem.name}
            ></img>
            <div className='card-body d-flex flex-column'>
                <h5 className='card-title'>{fooditem.name}</h5>
                <p className='fooditem_des'>{fooditem.description}</p>
                <p className='card-text'>
                    <FontAwesomeIcon icon={faIndianRupeeSign} size="xs"/>
                    {fooditem.price}
                    <br/>
                </p>
                {!showButtons && (
                    <button type="button"
                    id="cart_btn"
                    className='btn btn-primary  d-inline ml-4'
                    disabled={fooditem.stock===0} 
                    onClick={showAddToCartButtons}
                    >
                        Add To Cart
                    </button>
                )}
                {
                    showButtons&&(
                        <div className='stockCounter d-inline'>
                            <span className='btn btn-danger minus'>-</span>
                            <input type="number" className='form-control count d-inline'
                            value={quantity}
                            readOnly
                            />
                            <span className='btn btn-primary plus'>+</span>
                        </div>
                    )
                }
                <hr/>
                <p>
                    Status:
                    <span id="stock_status" 
                    className={fooditem.stock>0? "greenColor":"redColor"}
                    >
                        {fooditem.stock>0? "In-Stock":"Out-Stock"}
                    </span>
                </p>
            </div>
    
        </div>
    
    </div>
      )
 
}
export default Fooditem