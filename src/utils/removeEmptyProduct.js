// removeEmptyProduct(): Will remove a empty product slot from the cart when the product platforms choosen are the same for the same product.
export function removeEmptyProduct(tempCartArr){
    // Note: This is where you can increase the 'Quantity Count' for the product if it is the 
    // same product added to the bag with the same 'Product Platform'. Can also be done in the
    // 'addProductsToCart' module file where the same 'Product Platform' is found in a particular
    // block of code. 

    tempCartArr.forEach((obj, index) => {
        if (Object.keys(obj).length === 0)
        {
            tempCartArr.splice(index, 1);
        }
    });

}