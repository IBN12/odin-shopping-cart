///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: GameCategory.js
// Description: Will display the category that the user searched for.
// Notes: N/A
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { useParams, Link, useNavigate, useLocation} from "react-router-dom";
import { useEffect, useState } from "react";
import { games } from "../utils/games";
import { category } from "../utils/category";
import { SaveShoppingNavNode } from "../utils/save";

// GameCategory(): The game category component container.
export const GameCategory = (props) =>{
    const [displayDefaultShoppingList, setDisplayDefaultShoppingList] = useState(true);
    const [currentCategory, setCurrentCategory] = useState([]);
    const navigate = useNavigate();
    const { categoryId } = useParams();
    const { state } = useLocation();
    const {disableProductLinks} = props;

    useEffect(() => {
        if (categoryId === undefined)
        { 
            // Remove the display when the user clicks on the main shopping link.
            SaveShoppingNavNode.saveShoppingNavNode.forEach((node) => {
                if (node.hasAttribute('id'))
                {
                    node.removeAttribute('id');
                }
            });

            setDisplayDefaultShoppingList(true);

            navigate(`/shop`, {state: "products-styled"}); // Redirect the page again to rerender the component. 
            
            const gameProducts = document.querySelectorAll('.game-category-component-container > div > a > img');

            // Adding default styling to the products in the shop. 
            gameProducts.forEach(item => {
                item.setAttribute('style', 'box-shadow: 10px 10px 15px 4px black;');
                item.addEventListener('mouseover', () => {
                    item.removeAttribute('style');
                    item.setAttribute('id', `${state}`);
                });

                item.addEventListener('mouseout', () => {
                    item.setAttribute('style', 'box-shadow: 5px 10px 15px 4px black;');
                    item.removeAttribute('id');
                });
            });
                
        }
        else if (categoryId !== undefined)
        {   
            setCurrentCategory(category(games, categoryId)); 
            
            // Will display which category link the user clicked on. 
            SaveShoppingNavNode.saveShoppingNavNode.forEach((node) => {
                if (node.hasAttribute('id'))
                {
                    node.removeAttribute('id');
                }
                if (node.innerHTML === categoryId)
                {
                    node.setAttribute('id', 'current-category');
                }
            });

            setDisplayDefaultShoppingList(false);

            navigate(`/shop/${categoryId}`, {state: "products-styled"});

            const gameProducts = document.querySelectorAll('.game-category-component-container > div > a > img');

            gameProducts.forEach(item => {
                item.setAttribute('style', 'box-shadow: 10px 10px 15px 4px black;');
                item.addEventListener('mouseover', () => {
                    item.removeAttribute('style');
                    item.setAttribute('id', `${state}`);
                });

                item.addEventListener('mouseout', () => {
                    item.setAttribute('style', 'box-shadow: 10px 10px 15px 4px black;');
                    item.removeAttribute('id');
                });
            });
        }
        
    }, [categoryId, navigate, state]);

    return(
        <div className="game-category-component-container">
            {displayDefaultShoppingList ?
                <p>All Products</p>
                :
                <p>{categoryId}</p>
            }

            {disableProductLinks ?
                <>
                {displayDefaultShoppingList ?
                    <div>
                        {games.map(obj =>
                            <Link key={obj.id}>
                                <img 
                                    src={obj.image}
                                    alt={obj.name}
                                />
                                <p>{obj.name}</p>
                                <p>{obj.cost}</p>
                            </Link>
                        )}
                    </div>
                    :
                    <div>
                        {currentCategory.map(obj =>
                            <Link key={obj.id}>
                                <img 
                                    src={obj.image}
                                    alt={obj.name}
                                />
                                <p>{obj.name}</p>
                                <p>{obj.cost}</p>
                            </Link>
                        )}
                    </div>
                }
                </>
                :
                <>
                    {displayDefaultShoppingList ?
                        <div>
                            {games.map(obj => 
                                <Link key={obj.id} to={`/shop/product/${obj.name}`}>
                                    <img 
                                        src={obj.image}
                                        alt={obj.name}
                                    />
                                    <p>{obj.name}</p>
                                    <p>${obj.cost}</p>
                                </Link>
                            )}
                        </div>
                        :
                        <div>
                            {currentCategory.map(obj =>
                                <Link key={obj.id} to={`/shop/product/${obj.name}`}>
                                    <img
                                        src={obj.image}
                                        alt={obj.name}
                                    />
                                    <p>{obj.name}</p>
                                    <p>${obj.cost}</p>
                                </Link>
                            )}
                        </div>
                    }
                </>
            }
        </div>
    );
}