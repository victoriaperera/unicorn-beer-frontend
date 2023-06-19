import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "../Features/Auth/userSlice";
import verifyReducer from "../Common/Navbar/Verify/verifyAgeSlice";
import adminReducer from "../Features/Dashboard/adminSlice";
import shopReducer from "../Features/Shop/shopSlice";
import productReducer from "./productSlice";
// import orderReducer from "./orderSlice";
import cartSlice from "../Common/Navbar/Cart/cartSlice";

const rootReducer = combineReducers({
  user: userReducer,
  verify: verifyReducer,
  admin: adminReducer,
  shop: shopReducer,
  product: productReducer,
  // order: orderReducer,
  cart: cartSlice,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

let persistor = persistStore(store);

export { store, persistor };
