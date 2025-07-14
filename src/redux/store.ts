import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { dashboardSlice, appSettingsSlice } from './index.slices';

const persistConfig = {
  key: 'cduRoot',
  storage: storageSession,
  whitelist: ['appSettings'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    dashboardData: dashboardSlice,
    appSettings: appSettingsSlice,
  })
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
