import {configureStore} from "@reduxjs/toolkit"
import filterReducer from "./reducer"
const Store = configureStore({
    reducer :{
      filters :   filterReducer
    }
})
export default Store