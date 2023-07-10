// grabProductPlatforms(): Will grab the platforms that the product is currently on.
export const grabProductPlatforms = (product) => {
    const platformsArr = [];
    const platformsObj = product.platforms;

    for (const item in platformsObj){
        platformsArr.push([platformsObj[item]]);
    }

    return platformsArr;
}