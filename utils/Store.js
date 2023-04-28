import { createContext, useReducer } from "react";
import Cookies from "js-cookie";

export const Store = createContext();

const initialState = {
    cart: Cookies.get('cart')? JSON.parse(Cookies.get('cart')) : { cartItems: 0 },
};

function reducer(state, action) {
    switch(action.type) {
        case 'CART_ADD_ITEM': {
            let newQty = parseInt(action.payload, 10);
            newQty += state.cart.cartItems;
            const cartItems = newQty;
            Cookies.set('cart', JSON.stringify({...state.cart, cartItems}));
            return {...state, cart: {...state.cart, cartItems}}
        }
        default:
            return state;
    }
}

export function StoreProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {state, dispatch};
    return <Store.Provider value={value}>{children}</Store.Provider>;
}