import { createSlice, current } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const items = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : []

const totalAmount = localStorage.getItem('totalAmount') !== null ? JSON.parse(localStorage.getItem('totalAmount')) : 0

const totalQuantity = localStorage.getItem('totalQuantity') !== null ? JSON.parse(localStorage.getItem('totalQuantity')) : 0

const setItemFunc = (item, totalAmount, totalQuantity) => {
    localStorage.setItem('cartItems', JSON.stringify(item))
    localStorage.setItem('totalAmount', JSON.stringify(totalAmount))
    localStorage.setItem('totalQuantity', JSON.stringify(totalQuantity))
}

const initialState = {
    cartItems: items,
    totalQuantity: totalQuantity,
    totalAmount: totalAmount
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,

    reducers: {
        addItem(state, action) {
            console.log("Action:", action);
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id)
            console.log("state.cartItems", current(state));
            state.totalQuantity++

            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    image01: newItem.image01,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            } else {
                existingItem.quantity++
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
            }

            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity), 0)

            console.log("state.cartItems", current(state));

            setItemFunc(state.cartItems.map(item => item), state.totalAmount, state.totalQuantity)
            toast.success("Item added successfully")
        },



        // ========== remove item ========= 

        removeItem(state, action) {
            const id = action.payload
            const existingItem = state.cartItems.find(item => item.id === id)
            state.totalQuantity--

            if (existingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter(item => item.id !== id)
            }
            else {
                existingItem.quantity--
                existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price)
            }

            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity), 0
            )

            setItemFunc(state.cartItems.map(item => item), state.totalAmount, state.totalQuantity)
            toast.error("Item removed successfully")
        },

        // delete items
        // 

        deleteItem(state, action) {
            const id = action.payload
            const existingItem = state.cartItems.find(item => item.id === id)

            if (existingItem) {
                state.cartItems = state.cartItems.filter(item => item.id !== id)
                state.totalQuantity = state.totalQuantity - existingItem.quantity
            }

            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity), 0
            )

            setItemFunc(state.cartItems.map(item => item), state.totalAmount, state.totalQuantity)
            toast.error("Item deleted successfully")
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;