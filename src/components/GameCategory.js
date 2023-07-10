///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: GameCategory.js
// Description: Will display the category that the user searched for.
// Notes: N/A
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { games } from "../utils/games";
import { category } from "../utils/category";;

// GameCategory(): The game category component container.
export const GameCategory = () =>{
    const [displayDefaultShoppingList, setDisplayDefaultShoppingList] = useState(true);
    const [currentCategory, setCurrentCategory] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        if (categoryId === undefined)
        {
            console.log("Displaying default shopping list"); // Testing
            setDisplayDefaultShoppingList(true);
        }
        else if (categoryId !== undefined)
        {
            console.log("User Category: ", categoryId); // Testing
            setCurrentCategory(category(games, categoryId)); 
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
                        </Link>)}
                </div>
            }
        </div>
    );
}