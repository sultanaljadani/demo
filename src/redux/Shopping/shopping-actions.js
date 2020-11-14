import * as actionTypes from './shopping-types';

export const addToCart = (itmeID) => {
    return {
        type : actionTypes.ADD_TO_CART,
        payload: {
            id: itmeID
        },
    };
};
export const removeFromCart = (itmeID) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itmeID
        },
    };
};
export const adjustQty = (itmeID, value) => {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: itmeID,
            qty: value,
        },
    };
};
export const loadCurrentItem = (item) => {
    return {
        type: actionTypes.LODE_CURRENT_ITEM,
        payload: item,
    };
};