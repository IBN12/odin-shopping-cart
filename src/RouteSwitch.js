///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: RouteSwitch.js
// Description: Will contain all the routes for the application. 
// Notes: -> Remember that everything inside of routes changes when you move to a new route.
// Example: Homepage route | Shopping Page Route
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { HashRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { MainNavigation } from "./components/MainNavigation";
import { Shopping } from "./components/Shopping";
import { GameCategory } from "./components/GameCategory";
import { Product } from "./components/Product";
import { AddToBag } from "./components/AddToBag";
import { SearchField } from "./components/SearchField";

import { useState } from "react";

import './styles/styles.css';

// RouteSwitch(): The route switch component container. 
export const RouteSwitch = () => {
    const [cart, setCart] = useState([]); 
    const [displayAddToBag, setDisplayAddToBag] = useState(false);
    const [displaySearchField, setDisplaySearchField] = useState(false);
    const [saveProductPlatform, setSaveProductPlatform] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);
    const [userSearch, setUserSearch] = useState("");
    const [displayCartDashboardQuantity, setDisplayCartDashboardQuantity] = useState(false);
    const [cartDashboardQuantity, setCartDashboardQuantity] = useState(0);

    const [disableMainNavigationButtons, setDisableMainNavigationButtons] = useState(false);
    const [disableCategoryLinks, setDisableCategoryLinks] = useState(false); // This is the next task to implement when you work on this application. 
    const [disableProductLinks, setDisableProductLinks] = useState(false); 
    const [disableShopLink, setDisableShopLink] = useState(false);
    const [disableTitleLink, setDisableTitleLink] = useState(false);

    const [disableProductButtons, setDisableProductButtons] = useState(false); 

    return (
        <HashRouter>
            <MainNavigation
                setDisplayAddToBag={setDisplayAddToBag}
                setDisplaySearchField={setDisplaySearchField}
                cartDashboardQuantity={cartDashboardQuantity}
                displayCartDashboardQuantity={displayCartDashboardQuantity}
                disableMainNavigationButtons={disableMainNavigationButtons}

                setDisableMainNavigationButtons={setDisableMainNavigationButtons}
                setDisableCategoryLinks={setDisableCategoryLinks}
                setDisableProductLinks={setDisableProductLinks}
                disableShopLink={disableShopLink}
                setDisableShopLink={setDisableShopLink}
                disableTitleLink={disableTitleLink}
                setDisableTitleLink={setDisableTitleLink}

                setDisableProductButtons={setDisableProductButtons}
            />

            <SearchField
                displaySearchField={displaySearchField}
                setDisplaySearchField={setDisplaySearchField}
                userSearch={userSearch}
                setUserSearch={setUserSearch}

                setDisableMainNavigationButtons={setDisableMainNavigationButtons}
                setDisableCategoryLinks={setDisableCategoryLinks}
                setDisableProductLinks={setDisableProductLinks}
                setDisableShopLink={setDisableShopLink}
                setDisableTitleLink={setDisableTitleLink}

                setDisableProductButtons={setDisableProductButtons}
            />

            <AddToBag 
                cart={cart}
                setCart={setCart}
                displayAddToBag={displayAddToBag}
                setDisplayAddToBag={setDisplayAddToBag}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
                setDisplayCartDashboardQuantity={setDisplayCartDashboardQuantity}
                cartDashboardQuantity={cartDashboardQuantity}
                setCartDashboardQuantity={setCartDashboardQuantity}

                setDisableMainNavigationButtons={setDisableMainNavigationButtons}
                setDisableCategoryLinks={setDisableCategoryLinks}
                setDisableProductLinks={setDisableProductLinks}
                setDisableShopLink={setDisableShopLink}
                setDisableTitleLink={setDisableTitleLink}

                setDisableProductButtons={setDisableProductButtons}
            />

            <Routes>
                <Route path="/" element={<App />} />

                <Route path="/shop" element={<Shopping disableCategoryLinks={disableCategoryLinks} disableProductLinks={disableProductLinks} />}>
                    {/* <Route index element={<Shopping />} />  */}
                    <Route path=":categoryId" element={<GameCategory />} />
                </Route>

                <Route path="/shop/product/:productId" element={<Product
                        cart={cart}
                        setCart={setCart}
                        setDisplayAddToBag={setDisplayAddToBag}
                        saveProductPlatform={saveProductPlatform}
                        setSaveProductPlatform={setSaveProductPlatform}
                        totalPrice={totalPrice}
                        setTotalPrice={setTotalPrice}
                        setDisplayCartDashboardQuantity={setDisplayCartDashboardQuantity}
                        cartDashboardQuantity={cartDashboardQuantity}
                        setCartDashboardQuantity={setCartDashboardQuantity}

                        disableProductButtons={disableProductButtons}
                    />} 
                />
            </Routes>
        </HashRouter>
    );
}