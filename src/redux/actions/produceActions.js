import { ActionTypes } from "../contents/action-types"


export const setProducts = (products) =>{
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectProduct = (product) =>{
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    };
};

export const setUsers = (users) =>{
    return {
        type: ActionTypes.SET_USERS,
        payload: users,
    };
};

export const selectUser = (user) =>{
    return {
        type: ActionTypes.SELECTED_USER,
        payload: user
    };
};