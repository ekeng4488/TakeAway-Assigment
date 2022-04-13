function searchshow (query) {
    const url ='https://www.tvmaze.com/api'
    fetch (url)
    .then (Response => Response.JSON
    .then (JSONdata) => {
console.log (JSONdata);
} );
}

 