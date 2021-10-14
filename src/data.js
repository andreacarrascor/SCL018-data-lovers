export const filterData = (data, selectedDirector) => {

    const movies = data.films;
    const resultFilter = movies.filter(movie => movie.director === selectedDirector);
    return resultFilter;
}


export const sortData = (data, sortBy, sortOrder) => {

    const dataGhibli = data.films;
    const resultSort = dataGhibli.sort(function (a, b) {
        if (a[sortBy] > b[sortBy]) {
            return 1;
        }
        if (a[sortBy] < b[sortBy]) {
            return -1;
        }
        return 0;
    });
    if (sortOrder === 'desc-movie') {
        return resultSort.reverse();
    }
    else if (sortOrder === 'newest-movie') {
        return resultSort.reverse();
    }
    return resultSort;

}
