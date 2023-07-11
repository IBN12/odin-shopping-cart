import { games } from "./games"
import uniqid from "uniqid";

// addProductsToCart(): Will search for the products that match the current products that the user added to the cart.
export const addProductsToCart = (productId, saveProductPlatform, cart, totalPrice, setTotalPrice, sameProductAddedToCart) => {
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
                    console.log("Same product Platform: ", saveProductPlatform); // Testing
                    obj.quantity++;
                    setTotalPrice(totalPrice + parseFloat(obj.cost));
                    newProductObj = {};
                }
                else if(!samePlatformFound)
                {
                    Object.assign(newProductObj, obj);
                    newProductObj.quantity = 1;
                    newProductObj.id = uniqid();
                    setTotalPrice(totalPrice + parseFloat(obj.cost));
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
    }

    // |Original Algorithm...|
    // if (cart.length !== 0 && sameProductAddedToCart)
    // {
    //     cart.forEach((obj) => {
    //         if (obj.name === productId)
    //         {
    //             console.log("Game: ", productId); // Testing
    //             console.log("Obj Name: ", obj.name); // Testing
    //             if (obj.userPlatform === saveProductPlatform)
    //             {
    //                 console.log("Same Product Platform: ", saveProductPlatform); // Testing

    //                 obj.quantity++; // Increase the current product by 1 that has the same product platform. 

    //                 setTotalPrice(totalPrice + parseFloat(obj.cost)); // Add to the total price for the product that has the same product platform.

    //                 newProductObj = {};
    //             }
    //             else if (obj.userPlatform !== saveProductPlatform )
    //             {
    //                 Object.assign(newProductObj, obj);
    //                 newProductObj.quantity = 1; // Add one new product quantity for the same product with a different product platform.
    //                 newProductObj.id = uniqid(); // Add new a unique id for the new product to avoid identical id error.
    //                 setTotalPrice(totalPrice + parseFloat(obj.cost)); // Add to the total pirce for the same product with a different product platform. 
    //                 newProductObj["userPlatform"] = saveProductPlatform; 
    //                 console.log("Not The Same Product Platform"); // Testing
    //             }
    //         }

    //     });
    // }
    // else
    // {
    //     games.forEach((obj) => {
    //         if (obj.name === productId)
    //         {
    //             obj.quantity = 1; // Add a quanity of 1 for the first product added to the bag. 
    //             Object.assign(newProductObj, obj);
    //             newProductObj["userPlatform"] = saveProductPlatform; 
    //         }
    //     });
    //     setTotalPrice(totalPrice + parseFloat(newProductObj.cost)); // Add the product cost as the first total price.
    // }

    return newProductObj;
}