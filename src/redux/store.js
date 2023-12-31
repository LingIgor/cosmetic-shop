import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './CartSlise/CartSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { favoriteSlice } from './FavoriteSlice/FavoriteSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'favorite'],
};

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  favorite: favoriteSlice.reducer,
});

const persistUsersReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistUsersReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);