///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: ShoppingNavigation.js
// Description: The main shopping navigation for the shopping page.
// Notes: N/A
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SaveShoppingNavNode } from "../utils/save";

// ShoppingNavigation(): The shopping navigation component container.
export const ShoppingNavigation = ({disableCategoryLinks}) => {
    useEffect(()=>{
        const shoppingNavigationLinks = document.querySelectorAll('.shopping-navigation-component-container > div > a');

        SaveShoppingNavNode.saveShoppingNavNode = shoppingNavigationLinks;
    });

    return (
        <div className="shopping-navigation-component-container">
            <div>Welcome to the store!</div>
            {disableCategoryLinks ?
                <>
                    <div><Link>Adventure</Link></div>
                    <div><Link>Fighting</Link></div>
                    <div><Link>RPG</Link></div>
                    <div><Link>Racing</Link></div>
                    <div><Link>Shooters</Link></div>
                    <div><Link>Sports</Link></div>
                </>
                :
                <>
                    <div><Link to="/shop/Adventure">Adventure</Link></div>
                    <div><Link to="/shop/Fighting">Fighting</Link></div>
                    <div><Link to="/shop/RPG">RPG</Link></div>
                    <div><Link to="/shop/Racing">Racing</Link></div>
                    <div><Link to="/shop/Shooters">Shooters</Link></div>
                    <div><Link to="/shop/Sports">Sports</Link></div>
                </>
            }
            
            {/* <div><Link to="/shop/Adventure">Adventure</Link></div>
            <div><Link to="/shop/Fighting">Fighting</Link></div>
            <div><Link to="/shop/RPG">RPG</Link></div>
            <div><Link to="/shop/Racing">Racing</Link></div>
            <div><Link to="/shop/Shooters">Shooters</Link></div>
            <div><Link to="/shop/Sports">Sports</Link></div> */}
        </div>
    );
}