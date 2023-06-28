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

import { games } from "./utils/games";
import './styles/styles.css';

// RouteSwitch(): The route switch component container. 
export const RouteSwitch = () => {
    return (
        <HashRouter>
            <MainNavigation />

            <Routes>
                <Route path="/" element={<App />} />

                <Route path="/shop" element={<Shopping />}>
                    {/* <Route index element={<Shopping />} />  */}
                    <Route path=":categoryId" element={<GameCategory />} />
                </Route>

                <Route path="/shop/product/:productId" element={<Product />} />
            </Routes>
        </HashRouter>
    );
}