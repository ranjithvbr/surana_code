

export default function playReducer(state = '', action){
    switch(action.type){
        case 'NAME':
            return [...state, action.data];
        case 'REMOVE':
            return [...action.data];
        default:
            return state;
    }
}