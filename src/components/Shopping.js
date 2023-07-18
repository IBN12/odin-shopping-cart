///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: Shopping.js
// Description: The shopping page/route. 
// Notes: N/A
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { ShoppingNavigation } from "./ShoppingNavigation";
import { GameCategory } from "./GameCategory";

// Shopping(): The Shopping component container.
export const Shopping = ({disableCategoryLinks, disableProductLinks}) => {
    return (
        <div className="shopping-component-container">
            <ShoppingNavigation disableCategoryLinks={disableCategoryLinks} />
            <GameCategory disableProductLinks={disableProductLinks} />
        </div>
    );
}