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

import { games } from "./utils/games";

import { useState } from "react";

import './styles/styles.css';

// RouteSwitch(): The route switch component container. 
export const RouteSwitch = () => {
    const [cart, setCart] = useState([]); 
    const [displayAddToBag, setDisplayAddToBag] = useState(false);
    const [saveProductPlatform, setSaveProductPlatform] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);

    return (
        <HashRouter>
            <MainNavigation />

            <AddToBag 
                cart={cart}
                setCart={setCart}
                displayAddToBag={displayAddToBag}
                setDisplayAddToBag={setDisplayAddToBag}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
            />

            <Routes>
                <Route path="/" element={<App />} />

                <Route path="/shop" element={<Shopping />}>
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
                    />} 
                />
            </Routes>
        </HashRouter>
    );
}