///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: Product.js
// Description: Will display each product for the games object that the user wants to buy.
// Notes: N/A
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { grabProductInfo } from "../utils/grabProductInfo";
import { grabProductPlatforms } from "../utils/grabProductPlatform";
import { addProductsToCart } from "../utils/addProductsToCart";
import { removeEmptyProduct } from "../utils/removeEmptyProduct";

// SameProductAddedToCartMod() Module: keeps track of the same product being added to the cart.  
export const SameProductAddedToCartMod = (() => {
    let sameProductAddedToCart = false;
    
    return {sameProductAddedToCart}
})();

// Product(): The product component container.
export const Product = (props) => {
    const [productInfo, setProductInfo] = useState({});
    const [productPlatforms, setProductPlatforms] = useState([]);
    const [productPlatformClicked, setProductPlatformClicked] = useState(false);
    const {productId} = useParams();
    const {setDisplayAddToBag, 
            cart, 
            setCart, 
            saveProductPlatform, 
            setSaveProductPlatform, 
            totalPrice, 
            setTotalPrice, 
            setDisplayCartDashboardQuantity,
            cartDashboardQuantity,
            setCartDashboardQuantity,
            disableProductButtons} = props;

    useEffect(() => {
        // SaveProductId.saveProductId = productId;

        const tempProductInfo = Object.assign({}, grabProductInfo(productId));

        setProductInfo(tempProductInfo);
        setProductPlatforms(grabProductPlatforms(tempProductInfo));
        
        // Set the platform choice by default.
        if (productPlatforms.length !== 0){
            if (!productPlatformClicked) // avoid the update if the user manually chooses one of the product platforms. 
            {
                const productPlatformsContainer = document.querySelector('.product-component-container > div:nth-child(3) > button'); // The first button in the container.
                productPlatformsContainer.setAttribute('id', 'product-platform-choose'); // Set by default.
                setSaveProductPlatform(productPlatformsContainer.innerHTML); // Save the default product platform.
            } 
        }

        // Test if the user is adding the same the product to the cart.
        cart.forEach((obj) => {
            if (obj.name === productId)
            {
                SameProductAddedToCartMod.sameProductAddedToCart = true;
            }
            else
            {
                SameProductAddedToCartMod.sameProductAddedToCart = false;
            }
        });
        
    }, [productId, productPlatforms.length, setSaveProductPlatform, productPlatformClicked, setTotalPrice, cart]);

    function platformChoice(e){
        const productPlatformsContainer = document.querySelectorAll('.product-component-container > div:nth-child(3) > button');

        setProductPlatformClicked(true);

        productPlatformsContainer.forEach((item) => {
            if (item.hasAttribute('id'))
            {
                item.removeAttribute('id');
                setSaveProductPlatform(e.target.innerHTML);
            }

            if (e.target.innerHTML === item.innerHTML)
            {
                item.setAttribute('id', 'product-platform-choose');
            }
        });
    }

    function addToBag(){
        let tempCartArr = [];

        tempCartArr.push(addProductsToCart(
            productId, 
            saveProductPlatform, 
            cart, 
            totalPrice, 
            setTotalPrice, 
            SameProductAddedToCartMod.sameProductAddedToCart, 
            setDisplayCartDashboardQuantity,
            cartDashboardQuantity,
            setCartDashboardQuantity
        ));

        removeEmptyProduct(tempCartArr);

        setCart(cart.concat(tempCartArr));
    }

    function buyItNow(){
        let tempCartArr = [];

        tempCartArr.push(addProductsToCart(
            productId,
            saveProductPlatform,
            cart,
            totalPrice,
            setTotalPrice,
            SameProductAddedToCartMod.sameProductAddedToCart,
            setDisplayCartDashboardQuantity,
            cartDashboardQuantity,
            setCartDashboardQuantity
        ));

        removeEmptyProduct(tempCartArr);

        setCart(cart.concat(tempCartArr));

        setDisplayAddToBag(true);
    }

    return (
        <div className="product-component-container">
            <div><h1>{productInfo.name}</h1></div>
            <div>
                <img 
                    src={productInfo.image}
                    alt={productInfo.name}
                />
            </div>

            {disableProductButtons ?
                <>
                    <div>
                        {productPlatforms.map((item, index) => <button key={index}>{item}</button>)}
                    </div>
                    <div><button>ADD TO BAG</button></div>
                    <div><button>BUY IT NOW</button></div>
                </>
                :
                <>
                    <div>
                        {productPlatforms.map((item, index) => <button onClick={platformChoice} key={index}>{item}</button>)}
                    </div>
                    <div><button onClick={addToBag}>ADD TO BAG</button></div>
                    <div><button onClick={buyItNow}>BUY IT NOW</button></div>
                </>
            }
        </div>
    );
}