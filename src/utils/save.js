// saveProductId() Module: Will save the product param id for the cart.
export const SaveProductId = (() => {
    let saveProductId = "";

    return {saveProductId};
})();

// SaveCartTotalPrice() Module: Will save the total price of the cart. 
export const SaveTotalPrice = (() => {
    let saveTotalPrice = 0;

    return {saveTotalPrice};
})();

// SaveShoppingNavNode() Module: Will save all the node links from the shopping navigation component. 
export const SaveShoppingNavNode = (() => {
    let saveShoppingNavNode = [];

    return {saveShoppingNavNode};
})();