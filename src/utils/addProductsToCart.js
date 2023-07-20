import { games } from "./games"
import uniqid from "uniqid";

// addProductsToCart(): Will search for the products that match the current products that the user added to the cart.
export const addProductsToCart = (
    productId, 
    saveProductPlatform, 
    cart, 
    totalPrice, 
    setTotalPrice, 
    sameProductAddedToCart, 
    setDisplayCartDashboardQuantity,
    cartDashboardQuantity,
    setCartDashboardQuantity) => {

    let newProductObj = {};
    let samePlatformFound = false;

    if (cart.length !== 0 && sameProductAddedToCart)
    {
        cart.forEach((obj) => {
            if(obj.name === productId)
            {
                if (obj.userPlatform === saveProductPlatform)
                {
                    samePlatformFound = true;
                    obj.quantity++;
                    setTotalPrice(totalPrice + parseFloat(obj.cost));
                    setCartDashboardQuantity(cartDashboardQuantity + 1); // Add to the cart dashboard with a product that has the same platform.
                    newProductObj = {};
                }
                else if(!samePlatformFound)
                {
                    Object.assign(newProductObj, obj);
                    newProductObj.quantity = 1;
                    newProductObj.id = uniqid();
                    setTotalPrice(totalPrice + parseFloat(obj.cost));
                    setCartDashboardQuantity(cartDashboardQuantity + 1);  // Add to the cart dashboard with product that has a different platform. 
                    newProductObj["userPlatform"] = saveProductPlatform;
                }
            }
        });
    }
    else
    {
        games.forEach((obj) => {
            if (obj.name === productId)
            {
                obj.inCart = true;
                Object.assign(newProductObj, obj);
                newProductObj.quantity = 1;
                newProductObj["userPlatform"] = saveProductPlatform; 
            }
        });
        setTotalPrice(totalPrice + parseFloat(newProductObj.cost));
        setCartDashboardQuantity(cartDashboardQuantity + newProductObj.quantity); // Add to the cart dashboard. 
        setDisplayCartDashboardQuantity(true); // Display the quantity of the cart in the dashboard. 
    }

    return newProductObj;
}