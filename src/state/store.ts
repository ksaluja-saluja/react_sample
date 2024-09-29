import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contactUsReducer from '../reducers/contactSlice'

const rootReducer = combineReducers({
  contactUs: contactUsReducer
})

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export const store = configureStore({
  reducer: {
    contactUs: contactUsReducer
  }
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']