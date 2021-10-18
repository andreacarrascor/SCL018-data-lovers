export const filterData = (films, selectedDirector) => {
    return films.filter(movie => movie.director === selectedDirector);
}

export const sortData = (data, sortBy, sortOrder) => {
    // const dataGhibli = data.films;
    const resultSort = data.sort(function (a, b) {
        if (a[sortBy] > b[sortBy]) {
            return 1;
        }
        if (a[sortBy] < b[sortBy]) {
            return -1;
        }
    });
    if (sortOrder === 'desc-movie') {
        return resultSort.reverse();
    }
    return resultSort;

}

export const searchData = (data, condition, value) => {
    return data.filter(item => item[condition].toLowerCase().includes(value.toLowerCase()));
}
    

