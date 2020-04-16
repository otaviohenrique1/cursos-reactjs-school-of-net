export const counterReducer = (initialState = { total: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            // initialState.total = initialState.total + 1;
            // console.log(initialState);
            // return initialState;
            // return Object.assign({}, {total: initialState.total + 1});
            return {...initialState, total: initialState.total + 1};
        // break;
        case 'DECREMENT':
            return {...initialState, total: initialState.total - 1};
        // break;
        default:
            return initialState;
    }
}