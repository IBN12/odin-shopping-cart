// removeEmptyProduct(): Will remove a empty product slot from the cart when the product platforms choosen are the same for the same product.
export function removeEmptyProduct(tempCartArr){
    tempCartArr.forEach((obj, index) => {
        if (Object.keys(obj).length === 0)
        {
            tempCartArr.splice(index, 1);
        }
    });
}