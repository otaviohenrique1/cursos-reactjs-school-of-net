import { createStore, applyMiddleware, compose } from "redux";

export default (rootReducer) => {
    const middleware = [];
    const enchaters = [];
    enchaters.push(applyMiddleware(...middleware));
    const store = createStore(rootReducer, compose(...enchaters));
    return store;
};