import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import registrationReducer from './RegistrationSlice'
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import tokenReducer from "./tokenSlice";
import basketReducer from "./BasketSlice";
import snackReducer from "./SnackSlice"
import totalReducer from "./GrandTotalSlice"
import thunk from 'redux-thunk'

// Create the store

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['snack', 'total']
};



const reducer = combineReducers({
    registration: registrationReducer,
    token: tokenReducer,
    basket: basketReducer,
    snack: snackReducer,
    total: totalReducer,
})
const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(thunk), // Add Redux Thunk middleware,
});


export default store