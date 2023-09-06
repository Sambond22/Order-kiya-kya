import axios from "axios";
import {All_RESTAURANTS_REQUEST,
    All_RESTAURANTS_SUCCESS,
    All_RESTAURANTS_FAIL,
    CLEAR_ERRORS,
}from "../constants/restaurantConstant.js";

export const getRestaurants=()=>async(dispatch)=>{
    try{
        dispatch({type:All_RESTAURANTS_REQUEST});
        let link='/api/v1/eats/stores';
        const {data}=await axios.get(link);
        const {restaurant,count}=data;
        
        dispatch({
            type:All_RESTAURANTS_SUCCESS,
            payload:{restaurant,count},
        });


    }catch(error){
        dispatch({type:All_RESTAURANTS_FAIL,
        payload:error.response.data.message,
    });
}
}

export const CLEAR_ERRORS=()=>async (dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS,
    });
};