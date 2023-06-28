///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: ShoppingNavigation.js
// Description: The main shopping navigation for the shopping page.
// Notes: N/A
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { Link } from "react-router-dom";

// ShoppingNavigation(): The shopping navigation component container.
export const ShoppingNavigation = () => {
    return (
        <div className="shopping-navigation-component-container">
            <div>Welcome to the store!</div>
            <div><Link to="/shop/Adventure">Adventure</Link></div>
            <div><Link to="/shop/Fighting">Fighting</Link></div>
            <div><Link to="/shop/RPG">RPG</Link></div>
            <div><Link to="/shop/Racing">Racing</Link></div>
            <div><Link to="/shop/Shooters">Shooters</Link></div>
            <div><Link to="/shop/Sports">Sports</Link></div>
        </div>
    );
}