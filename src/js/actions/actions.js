export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';

const addItem = (name, quantity, price, total) => {
    return {
        type: ADD_ITEM,
        payload: {name, quantity, price, total}
    };
};

const deleteItem = (index) => {
    return {
        type: DELETE_ITEM,
        payload: {index}
    };
};

const editItem = (name, quantity, price) => {
    return {
        type: EDIT_ITEM,
        payload: {name, quantity, price}
    };
};

export {
    addItem,
    deleteItem,
    editItem
};