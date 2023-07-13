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
    const {displaySearchField, setDisplaySearchField, userSearch, setUserSearch} = props;

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
                                let userSearchArr = [];
                                let indexArr = [];
                                let userSearchCopy = "";

                                if (displaySearchLink)
                                {
                                    setDisplaySearchLink(false);
                                }
                                else if (displaySearchNotFound)
                                {
                                    setDisplaySearchNotFound(false);
                                }

                                // Convert items to the matching names in the system. 
                                for(let i = 0; i < userSearch.length; i++)
                                {
                                    if (userSearch[i] === userSearch[0].toLowerCase() || userSearch[i] === userSearch[0].toUpperCase())
                                    {
                                        console.log(userSearch[i]); // Testing
                                        userSearchArr.push(userSearch[i].toUpperCase());
                                        console.log("User Search Array: ", userSearchArr); // Testing
                                    }
                                    else if (userSearch[i].includes(' '))
                                    {
                                        userSearchArr.push(userSearch[i]);
                                        indexArr.push(userSearch[i + 1].toUpperCase());
                                        console.log("Index Array: ", indexArr); // Testing
                                    }
                                    else if (userSearch[i] === userSearch[i].toUpperCase() || userSearch[i] === userSearch[i].toLowerCase())
                                    {
                                        userSearchArr.push(userSearch[i].toLowerCase());
                                        console.log("User Search Array: ", userSearchArr); // Testing
                                    }
                                }

                                // Replace the matching userSearchArr items with the items from indexArr:
                                userSearchArr.forEach((item, index) => {
                                    if (item === ' ')
                                    {
                                        console.log(userSearchArr[index + 1]);
                                        indexArr.forEach((indexItem) => {
                                            if (indexItem === userSearchArr[index + 1].toUpperCase())
                                            {
                                                userSearchArr[index + 1] = indexItem;
                                            }
                                        });
                                    }
                                });

                                // convert userSearchArr to a string:
                                userSearchCopy = userSearchArr.toString();
                                userSearchCopy = userSearchCopy.replaceAll(',', '');

                                // Test if the user search item is in the system:
                                games.forEach((obj, index) => {
                                    if (obj.name === userSearchCopy)
                                    {
                                        console.log(userSearchCopy, " is in the system."); // Testing
                                        setUserSearch(userSearchCopy);
                                        setDisplaySearchLink(true);

                                        searchFound = true;
                                    }

                                    if (games.length - 1 === index && !searchFound)
                                    {
                                        setDisplaySearchNotFound(true);
                                    }
                                }); }}>

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