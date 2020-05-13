export default function cartReducer(state = [], action) {
    switch (action.type) {
        case "INCREMENT_COURSE":
            return [...state, {...action.product}];
        default:
            return state;
    }
}