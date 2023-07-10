///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: Product.js
// Description: Will display each product for the games object that the user wants to buy.
// Notes: N/A
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { grabProductInfo } from "../utils/grabProductInfo";
import { grabProductPlatforms } from "../utils/grabProductPlatform";
import { SaveProductId } from "../utils/save";
import { addProductsToCart } from "../utils/addProductsToCart";
import { removeEmptyProduct } from "../utils/removeEmptyProduct";

// Product(): The product component container.
export const Product = (props) => {
    const [productInfo, setProductInfo] = useState({});
    const [productPlatforms, setProductPlatforms] = useState([]);
    const [productPlatformClicked, setProductPlatformClicked] = useState(false);
    const [differentGameAddedToCart, setDifferentGameAddedToCart] = useState(false)
    const {productId} = useParams();
    const {setDisplayAddToBag, cart, setCart, saveProductPlatform, setSaveProductPlatform, totalPrice, setTotalPrice} = props;

    useEffect(() => {
        SaveProductId.saveProductId = productId;
        console.log("You are viewing the product: ",productId); // Testing

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
    }, [productId, productPlatforms.length, setSaveProductPlatform, productPlatformClicked, setTotalPrice]);

    function platformChoice(e){
        const productPlatformsContainer = document.querySelectorAll('.product-component-container > div:nth-child(3) > button');
        console.log(e.target.innerHTML); // Testing

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
        console.log("Adding Product To Bag."); // Testing

        let tempCartArr = []

        tempCartArr.push(addProductsToCart(productId, saveProductPlatform, cart, differentGameAddedToCart, totalPrice, setTotalPrice));
        console.log("Temp Cart Array: ", tempCartArr);  // Testing

        removeEmptyProduct(tempCartArr);

        // setCart(cart.concat(addProductsToCart(productId, saveProductPlatform, cart, differentGameAddedToCart, setNoProductReturned)));
        setCart(cart.concat(tempCartArr));
        console.log("Real Cart Array: ", cart); // Testing

        setDifferentGameAddedToCart(true);

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
            <div>
                {productPlatforms.map((item, index) => <button onClick={platformChoice} key={index}>{item}</button>)}
            </div>
            <div><button onClick={addToBag}>ADD TO BAG</button></div>
            <div><button>BUY IT NOW</button></div>
        </div>
    );
}