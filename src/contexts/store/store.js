import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import registrationReducer from './RegistrationSlice'
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import tokenReducer from "./tokenSlice";
import basketReducer from "./BasketSlice";
// Create the store

const persistConfig = {
    key: 'root',
    storage
};


const reducer = combineReducers({
    registration: registrationReducer,
    token: tokenReducer,
    basket: basketReducer,
})
const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});
export default store