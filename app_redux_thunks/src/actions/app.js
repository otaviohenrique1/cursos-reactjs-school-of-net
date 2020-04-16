import axios from "axios";

// action types
export const IS_FETCHING = 'IS_FETCHING';
export const FETCHED = 'FETCHED';
export const FETCHED_ERROR = 'FETCHED_ERROR';

// actions creators

export function isFetching(bol) {
    return {
        type: IS_FETCHING,
        isLoading: bol
    };
}

export function fetchedError(err) {
    return {
        type: FETCHED_ERROR,
        error: err
    };
}

export function fetched(data) {
    return {
        type: FETCHED,
        data
    };
}

// thunks
// Exemplo de funcao thunk
export function thunkFetchData() {
    return async (dispatch) => {
        dispatch(isFetching(true));
        try {
            const { data } = await axios.get('http://api.icndb.com/jokes/');
            dispatch(fetched(data.value))
            dispatch(isFetching(false));
        } catch (err) {
            dispatch(fetchedError(err));
            dispatch(isFetching(false));
        }
    };
}
