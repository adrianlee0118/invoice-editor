const initialState = {
    items: {

    }
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD':
            return {

            };
        case 'EDIT':
            return {
                
            };
        case 'DELETE':
            return {

            };
        default:
            return state;
    }
}

export default reducer;