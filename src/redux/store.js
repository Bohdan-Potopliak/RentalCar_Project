import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import carsReducer from './cars/carsSlice';
import filtersReducer from './filter/filtersSlice';
import brandsReducer from './brands/brandsSlice';
import loaderReducer from './loader/loaderSlice';
import loadingMiddleware from './loader/loadingMiddleware';
import favoritesReducer from './favorites/favoritesSlice';

const rootReducer = combineReducers({
    cars: carsReducer,
    filters: filtersReducer,
    brands: brandsReducer,
    favorites: favoritesReducer,
    loader: loaderReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['favorites'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(loadingMiddleware),
});

export const persistor = persistStore(store);
