import { createSlice } from "@reduxjs/toolkit";

const cartsSlice = createSlice({
    name:"carts",
    initialState:{
        productData:[],
        count:0,

    },

    reducers:{
        //addToCart
        addToCart:(state,action)=>{
            return {...state,
                count:state.count+1,
                productData:[...state.productData,
                action.payload]}
        },
        //removeFromCart
        removeFromCart:(state,action)=>{
            return{...state,count:state.count-1,productData:[...state.productData,action.payload]}
        }
    }
})


export const{addToCart, removeFromCart} = cartsSlice.actions  //exporting action 

export default cartsSlice.reducer; //exporting reducer
//only reducer can have default, action should not have defaulter because there will be many actions, but only one reducer. 

// in a jsx module, we can have only one 'export default' 