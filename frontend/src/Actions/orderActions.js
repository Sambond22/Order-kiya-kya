import axios from 'axios'
import {
     CREATE_ORDER_REQUEST,
     CREATE_ORDER_SUCCESS,
     CREATE_ORDER_FAIL,
    
     MY_ORDER_REQUEST,
     MY_ORDER_SUCCESS,
     MY_ORDER_FAIL,
    
     ORDER_DETAILS_REQUEST,
     ORDER_DETAILS_SUCCESS,
     ORDER_DETAILS_FAIL,
    
     CLEAR_ERRORS,
}from "../Constants/orderConstants.js";

export const createOrder=(order)=>async(dispatch)=>{
    try{
        dispatch({
            type:CREATE_ORDER_REQUEST
        })
        const config={
            headers:{
                "Content-Type":"application/json"
            }
        }

        const {data}=await axios.post()
    }
}