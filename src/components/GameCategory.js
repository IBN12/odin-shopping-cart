///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: GameCategory.js
// Description: Will display the category that the user searched for.
// Notes: N/A
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { games } from "../utils/games";
import { category } from "../utils/category";
import { SaveShoppingNavNode } from "../utils/save";


// GameCategory(): The game category component container.
export const GameCategory = (props) =>{
    const [displayDefaultShoppingList, setDisplayDefaultShoppingList] = useState(true);
    const [currentCategory, setCurrentCategory] = useState([]);
    const { categoryId } = useParams();
    const {disableProductLinks} = props;

    useEffect(() => {
        if (categoryId === undefined)
        {
            console.log("Displaying default shopping list"); // Testing

            // Remove the display when the user clicks on the main shopping link.
            SaveShoppingNavNode.saveShoppingNavNode.forEach((node) => {
                if (node.hasAttribute('id'))
                {
                    node.removeAttribute('id');
                }
            });

            setDisplayDefaultShoppingList(true);
        }
        else if (categoryId !== undefined)
        {
            console.log("User Category: ", categoryId); // Testing
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
        }

    }, [setDisplayDefaultShoppingList, categoryId]);

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

            {/* {displayDefaultShoppingList ?
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
            } */}
        </div>
    );
}