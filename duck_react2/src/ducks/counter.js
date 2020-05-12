/*
    REDUCER - export default
    ACTION CREATOR - function/ arrow function -> (()=>{} ou () => ())
    ACTION TYPES - "export" UPPERCASE, dentro de const
    InitialState - dentro const, não export
*/

/* ACTION TYPES */
export const ON_INCREMENT = 'ON_INCREMENT';
export const ON_DECREMENT = 'ON_DECREMENT';

/* ACTION CREATORS */
export function onIncrement(value) {
	return {
		type: ON_INCREMENT,
		payload: {
			value
		}
	};
}

export function onDecrement(value) {
	return {
		type: ON_DECREMENT,
		payload: {
			value
		}
	};
}

/* REDUCER */
const InitialState = 0
export default function reducer(state = InitialState, action) {
	switch(action.type) {
		case ON_INCREMENT:
			return state + 1;
		case ON_DECREMENT:
			return state - 1;
		default:
			return state
	}
}