const orderData = {
    orderDefault: function (printFilm) {
        let orderedResults = printFilm.sort(function (a, b) {
            if (a.title > b.title) {
                return 1; // retornar valores a la derecha (coordenadas)
            } else {
                return -1; // retornar valores a la izquierda (coordenadas)
            }
        });
        return orderedResults;
    },
};

export default orderData;