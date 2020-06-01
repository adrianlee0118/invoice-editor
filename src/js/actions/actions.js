function addItem(name, quantity, price, total) {
    return {
        type: 'ADD_ITEM',
        payload: {name, quantity, price, total}
    }
}

function deleteItem(index) {
    return {
        type: 'DELETE_ITEM',
        payload: {index}
    }
}

function editItem(name, quantity, price){
    return {
        type: 'EDIT_ITEM',
        payload: {name, quantity, price}
    }
}