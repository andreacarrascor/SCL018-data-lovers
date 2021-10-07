
export const filterData = (data, selectedDirector) => {

    const movies = data.films;
    const resultFilter = movies.filter(movie => movie.director === selectedDirector);
    return resultFilter;

}


// ordenar de la A a la Z y viceversa
// export const sortData = (data, sortBy, sortOrder) => {

// },

