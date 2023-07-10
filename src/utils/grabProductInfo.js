import { games } from "./games"

// grabProductInfo(): Will grab the desired product that the user would like to purchase.
export const grabProductInfo = (productId) => {
    const productObj = {};

    games.forEach((obj) => {
        if (obj.name === productId)
        {
            Object.assign(productObj, obj);
        }
    });
    
    return productObj;
}