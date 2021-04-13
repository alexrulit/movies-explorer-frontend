const isSaved = (array, savedArray) => {
    return array.map((item) => {
        const find = savedArray.find((saved) => saved.movieId === item.id);
        if(find === undefined) {
            item.isSaved = false;
        } else {
            item.isSaved = true;
        }
        return item;
    })
}

export const filter = (array, savedArray, string, duration) => {
    if (duration) {
        return isSaved(array.filter((item) => item.nameRU.includes(string) && parseInt(item.duration) <= 40), savedArray);
    } else {
        return isSaved(array.filter((item) => item.nameRU.includes(string)), savedArray);
    }
}