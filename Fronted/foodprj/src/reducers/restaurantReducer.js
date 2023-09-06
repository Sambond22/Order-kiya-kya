import {All_RESTAURANTS_REQUEST,
    All_RESTAURANTS_SUCCESS,
    All_RESTAURANTS_FAIL,
    CLEAR_ERRORS,
}from "../constants/restaurantConstant.js";

const intialState={
    restaurants:[],
};

export const restaurantReducer=(state=intialState,action) => {
    switch(action.type){
        case All_RESTAURANTS_REQUEST:
            return{
                ...state,
                loading:true,
                error:null
            };
            case All_RESTAURANTS_SUCCESS:
                return{
                    ...state,
                    loading:true,
                    restaurants:action.payload,
                };
                case All_RESTAURANTS_FAIL:
                    return{
                        ...state,
                        loading:false,
                        error:action.payload,
                    };
                    case CLEAR_ERRORS:
                        return{
                            ...state,
                            error:null,
                        };

                        default:
                            return state;
    }
};