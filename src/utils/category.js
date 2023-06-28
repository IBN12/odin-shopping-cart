// category(): Will choose each game by a specific category.
export const category = (games, categoryId) => {
    const categoryArr = [];

    games.forEach((obj) => {
        if (obj.category === categoryId)
        {
            categoryArr.push(obj);
        }
    });

    return categoryArr;
}