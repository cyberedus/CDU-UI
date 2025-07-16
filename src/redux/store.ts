import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { config } from 'src/config/config';

import { dashboardSlice, appSettingsSlice } from './index.slices';

const persistConfig = {
  key: 'cduRoot',
  storage,
  whitelist: ['appSettings', 'dashboardData'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    appSettings: appSettingsSlice,
    dashboardData: dashboardSlice,
  })
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  devTools: config.DEV_TOOLS === 'development',
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
