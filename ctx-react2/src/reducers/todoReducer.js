import id from "uuid/v4";

export const initialState = [
    {
        id: id(),
        title: 'Title 1'
    },
    {
        id: id(),
        title: 'Title 2'
    }
];

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat({
                id: action.id,
                title: action.title
            });
            
        default:
            return state;
    }
};

export default todoReducer;