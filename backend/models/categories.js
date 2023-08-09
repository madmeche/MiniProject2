// use:
//const getAnnuals, then fetch api's
//const getPerennials, then fetch api's
//const getShrubs, then fetch api's 
//cont getTrees, then fetch api's  https://perenual.com/plant-species-database-search-finder?pages=3

// Incorporate Plant Quiz?

// ** add an indoor category**
// ** add succulent category**

const getAnnuals = (res) => {
    fetch("")
    .then((response) => response.json())
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => {
        console.log("Unable to fetch: ", err);
    })
}