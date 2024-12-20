import {createSlice} from "@reduxjs/toolkit";
import {ProductData} from "../../type";

interface UserInfo{
    id: string;
    name: string;
    email: string;
}

interface InitialState{
    cart:ProductData[];
    wishList:ProductData[];
    userInfo:UserInfo | null;
}

const initialState: InitialState = {
    cart: [],
    wishList: [],
    userInfo: null,
};

export const jumiaSlice = createSlice({
    name: 'jumia',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.cart.find(
                (item)=>item._id === action.payload._id
            );
            if (existingProduct) {
                existingProduct.quantity = (existingProduct.quantity || 0) + 1;
            } else {
                state.cart.push({
                    ...action.payload,
                    quantity: 1,
                });
            }
        },
        increaseQuantity:(state, action) => {
            const existingProduct = state.cart.find(
                (item)=>item._id === action.payload
            );
            if (existingProduct){
                existingProduct.quantity += 1;
            }
        },
        decreaseQuantity:(state, action) => {
            const existingProduct = state.cart.find(
                (item)=>item._id === action.payload
            );
            if (existingProduct){
                existingProduct.quantity -= 1;
            }
        },
        removeFromCart:(state, action)=> {
            state.cart = state.cart.filter((item)=>item._id !== action.payload);
        },
        resetCart:(state)=> {
            state.cart = [];
        },
        addToWishList: (state, action) => {
            const existingProduct = state.wishList.find(
                (item)=>item._id === action.payload._id
            );
                state.cart.push(action.payload);
                },
        resetWishList:(state) => {
            state.wishList = [];
        },
        addUser: (state, action) => {
            state.userInfo = action.payload;
        },
        removeUser: (state, action) => {
            state.userInfo = null;
        },
    },
});

export const {addToCart, increaseQuantity, decreaseQuantity, resetCart, removeFromCart, removeUser, addToWishList, resetWishList, addUser} = jumiaSlice.actions;
export default jumiaSlice.reducer;