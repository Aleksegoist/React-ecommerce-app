// import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './reducer'

// const store = createStore(rootReducers);

const store = configureStore({
    reducer: rootReducers,
});

export default store;