import { combineReducers } from "redux";
import { productReducer, selectedProductReducer, userReducer } from "./productReducer";


const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    allUsers: userReducer,
})

export default reducers;