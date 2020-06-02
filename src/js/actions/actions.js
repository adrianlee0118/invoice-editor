export const ADD_NEW_ITEM = 'ADD_NEW_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';

const addItem = (itemData) => {
    return {
        type: ADD_NEW_ITEM,
        itemData,
    };
};

const removeItem = (position) => {
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