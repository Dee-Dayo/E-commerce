import { configureStore } from "@reduxjs/toolkit";
import jumiaReducer from "@/redux/jumiaSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    REGISTER,
    WebStorage,
} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import {PURGE} from "redux-persist/es/constants";
import createWebStorage from "redux-persist/es/storage/createWebStorage";

export function createPersistStorage():WebStorage {
    const isServer = typeof window === "undefined";

    if(isServer){
        return {
            getItem(){
                return Promise.resolve(null);
            },
            setItem(){
                return Promise.resolve();
            },
            removeItem(){
                return Promise.resolve();
            },
        };
    }
    return createWebStorage("local");
};

const customStorage=typeof window !== 'undefined'
    ? createWebStorage("local")
    : createPersistStorage();

const persistConfig = {
    key: "root",
    storage: customStorage,
};

const persistedReducer = persistReducer(persistConfig, jumiaReducer)

export const store = configureStore({
    reducer: {
        jumia: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);