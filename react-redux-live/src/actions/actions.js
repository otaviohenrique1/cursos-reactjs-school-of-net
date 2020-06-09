// action types
export const HELLO = 'HELLO';

// action creators
export const hello = (data) => {
    console.log('data ->', data);
    
    return {
        type: HELLO,
        payload: {
            msg: 'Hello Live Class - Redux Action',
            data: data
        }
    };
};