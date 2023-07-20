///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: AddToBag.js
// Description: Add to bag window.
// Notes: -> Need to find some type of way to close the cart window the same way it was opened. Should study the framer-motion 
// framework more to understand the animate presence. May have something to do with the 'key' attribute. 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link} from "react-router-dom";
import { useState } from "react";

// addToBag Variant: non-primitive obj
const addToBag = {
    hidden: { x: "100%" }, // This means it is 100 percent hidden off the screen.
    visible: { x: 0, opacity: 0.99 },
};

// AddToBag(): Products choosen by the user will shown here.
export const AddToBag = ({
    cart, 
    setCart, 
    displayAddToBag, 
    setDisplayAddToBag, 
    totalPrice, 
    setTotalPrice, 
    setDisplayCartDashboardQuantity,
    cartDashboardQuantity,
    setCartDashboardQuantity,
    setDisableMainNavigationButtons,
    setDisableCategoryLinks,
    setDisableProductLinks,
    setDisableShopLink,
    setDisableTitleLink,
    setDisableProductButtons}) => {
    const [productQuantity, setProductQuantity] = useState(0); // Using state in order for the component to update during the product quantity increase and decrease
    const location = useLocation();
    
    // closeAddToBag(): Closes the add to bag screen.
    function closeCart(){
        setDisplayAddToBag(false);
        setDisableMainNavigationButtons(false);
        setDisableCategoryLinks(false);
        setDisableProductLinks(false);
        setDisableShopLink(false);
        setDisableTitleLink(false);
        setDisableProductButtons(false);

        // Remove the cart quantity dashboard if the cart is empty.
        if (cartDashboardQuantity === 0)
        {
            setDisplayCartDashboardQuantity(false);
        }
    }

    // decreaseQuantity(): Decreases the quantity of the product in the cart.
    function decreaseQuantity(obj){
        obj.quantity--;
        
        // Remove the product from the cart. 
        if (obj.quantity === 0)
        {
            setCart(cart.filter((product) => product !== obj));
        }

        // Decrease Total Price
        setTotalPrice((totalPrice - parseFloat(obj.cost)));

        // Decrease the cart dashboard quantity
        setCartDashboardQuantity(cartDashboardQuantity - 1);

        setProductQuantity(obj.quantity);
    }

    // increaseQuantity(): Increases the quantity of the product in the cart.
    function increaseQuantity(obj){
        obj.quantity++;

        // Increase Total Price
        setTotalPrice(totalPrice + parseFloat(obj.cost));

        // Increase the cart dashboard quantity
        setCartDashboardQuantity(cartDashboardQuantity + 1);

        setProductQuantity(obj.quantity);
    }

    function resetCart(){
        setDisplayAddToBag(false);
        setDisableMainNavigationButtons(false);
        setDisableCategoryLinks(false);
        setDisableProductLinks(false);
        setDisableShopLink(false);
        setDisableTitleLink(false);
        setDisableProductButtons(false);

        setCart([]); // Remove all the products from the cart.
        
        setCartDashboardQuantity(0); // Set the cart dashboard quantity back to zero.
        setDisplayCartDashboardQuantity(false); // Display the default cart. 

        setTotalPrice(0); // Reset the total price. 
    }

    return (
        <AnimatePresence>
            {displayAddToBag && (
                <motion.div
                    key={location}
                    variants={addToBag}
                    className="add-to-bag-component-container"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ ease: "easeOut", duration: 0.5} }>

                        <div>
                            <button onClick={closeCart}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                                </svg>
                            </button>
                        </div>

                        <div>
                            <h1>Main Shopping Bag</h1>
                        </div>

                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />
                            </svg>
                        </div>

                        <div>
                            {cart.length === 0 && (
                                <div className="empty-cart">Your Cart Is Empty</div>
                            )}

                            {cart.length > 0 && (
                                <>
                                    {cart.map((obj) => <div className="product-section" key={obj.id}>
                                        <div>
                                            <img
                                                src={obj.image}
                                                alt={obj.name} 
                                            />
                                            <div>
                                                <div>{obj.category}</div>
                                                <div>${obj.cost}</div>
                                                <div>{obj.name}</div>
                                                <div>{obj.userPlatform}</div>
                                            </div>
                                        </div>

                                        <div className="product-count">
                                            <button onClick={() => {decreaseQuantity(obj)}}>-</button>
                                            <div>{obj.quantity}</div>
                                            <button onClick={() => {increaseQuantity(obj)}}>+</button>
                                        </div>

                                    </div>)}

                                    <div className="checkout-section">
                                        <div><Link to="/" onClick={resetCart}>Checkout</Link></div>
                                        <p>Total Price: ${totalPrice.toFixed(2)}</p>
                                    </div>
                                </>
                            )}
                        </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}