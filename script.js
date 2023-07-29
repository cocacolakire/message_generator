const URL = "https://zenquotes.io/api/random/"

const getQuote = () => {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        // Process the data returned from the API
        console.log(data[0]['q']);
        document.getElementById('rand_msg').innerText = '"' + data[0]['q'] + '"';
        document.getElementById('author').innerText = ' - ' + data[0]['a'];  
    })
    .catch(error => {
        // Handle any errors that occur during the request
        console.error(error);
    });

}