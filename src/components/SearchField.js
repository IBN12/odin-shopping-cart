///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: SearchField.js
// Description: User can search for a product in the search field. 
// Notes: N/A
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { motion, AnimatePresence } from "framer-motion";
import { useState} from "react";
import { Link } from "react-router-dom";
import { games } from "../utils/games";

// searchField Variant: non-primitive obj
const searchField = {
    hidden: {x: 0},
    visible: {x: 0, opacity: 0.8}
}

// SearchField(): The search field component container.
export const SearchField = (props) => {
    const [displaySearchLink, setDisplaySearchLink] = useState(false);
    const [displaySearchNotFound, setDisplaySearchNotFound] = useState(false);
    const {
        displaySearchField, 
        setDisplaySearchField, 
        userSearch, 
        setUserSearch, 
        setDisableMainNavigationButtons, 
        setDisableCategoryLinks,
        setDisableProductLinks,
        setDisableShopLink,
        setDisableTitleLink,
        setDisableProductButtons} = props;

    return(
        <AnimatePresence>
            {displaySearchField ?
                <motion.div
                    className="search-field-component-container"
                    variants={searchField}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ease: "easeIn", duration: 0.2 }}
                    >
                    <div>
                        <button onClick={() => {
                            setDisplaySearchField(false);
                            setDisableMainNavigationButtons(false);
                            setDisableCategoryLinks(false);
                            setDisableProductLinks(false);
                            setDisableShopLink(false);
                            setDisableTitleLink(false);
                            setDisableProductButtons(false); 
                            
                            if (displaySearchLink)
                            {
                                setDisplaySearchLink(false);
                            }
                            else if (displaySearchNotFound)
                            {
                                setDisplaySearchNotFound(false);
                            }
                            }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                            </svg>
                        </button>
                    </div>

                    <div>
                        <span>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                                </svg>
                            </div>

                            <form onSubmit={e => {
                                e.preventDefault();

                                let searchFound = false;

                                if (displaySearchLink)
                                {
                                    setDisplaySearchLink(false);
                                }
                                else if (displaySearchNotFound)
                                {
                                    setDisplaySearchNotFound(false);
                                }
                                
                                // Search algorithm to find a specific matching product. 
                                games.forEach((obj, index) => {
                                    let strName = obj.name;
                                    let match = 0;
                                    let noMatch = 0;

                                    for (let i = 0; i < userSearch.length; i++){
                                        if ((strName.includes(userSearch[i].toLowerCase()) || strName.includes(userSearch[i].toUpperCase())))
                                        {
                                            match++;
                                        }
                                        else
                                        {
                                            noMatch++;
                                        }
                                    }
                                    
                                    if (match === strName.length && noMatch === 0) // Perfect Match
                                    {
                                        setUserSearch(strName);
                                        setDisplaySearchLink(true);
                                        searchFound = true;
                                    }
                                    
                                    if (games.length - 1 === index && !searchFound)
                                    {
                                        setDisplaySearchNotFound(true);
                                    }
                                });
                                }}>

                                <input type="text" placeholder="Search" onChange={e => {
                                    setUserSearch(e.target.value);
                                    if (displaySearchLink)
                                    {
                                        setDisplaySearchLink(false);
                                    }
                                    else if (displaySearchNotFound)
                                    {
                                        setDisplaySearchNotFound(false);
                                    }}} 
                                />
                            </form>
                        </span>


                        {displaySearchLink ?
                            <div><Link to={`/shop/product/${userSearch}`}>{userSearch}</Link></div>
                            :
                            null
                        }

                        {displaySearchNotFound ?
                            <div>This product is currently not in the system.</div>
                            :
                            null
                        }
                    </div>
                </motion.div>
                :
                null
            }
        </AnimatePresence>
    );
}