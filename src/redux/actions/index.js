// Add Item to Cart
// export const addCart = (product) => {
//     return {
//         type: 'ADDITEM',
//         payload: product
//     }
// }

// // Delete Item from Cart
// export const delCart = (product) => {
//     return {
//         type: 'DELITEM',
//         payload: product
//     }
// }

export const addItem = (product) => {
    return {
        type: 'ADDITEM',
        payload: product
    }
}

// Delete Item from Cart
export const delItem = (product) => {
    return {
        type: 'DELITEM',
        payload: product
    }
}