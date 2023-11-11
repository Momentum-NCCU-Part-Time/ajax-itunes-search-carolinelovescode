// const musicURL = "https://itunes.apple.com/search?term="
const iTunesUrl = "https://itunes.apple.com/search?term="
const everything = document.querySelector(".container")
let musicName = document.querySelector("#musicName");
let searchText = document.querySelector(".searchText")

// let findButton = document.querySelectorAll('.findButton')

// add an event listener for the submit button, when you press the submit button you want it to fetch (get) data from the itunes app


let searchForm = document.querySelector('#lookUp')

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (musicName.value) {
        let wholeUrl = `${iTunesUrl}${musicName.value}`
        getMusic(wholeUrl);
        searchText.innerText = "Search Results";
    }
});
// adding in text for "Here is your results"
// going to API and showing all of the data
function getMusic(url) {
    fetch(url, {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
    }).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data)
    })


};

// display the data

function showResults(songArray) {
    container.innerHTML = ""
    if (songArray.length === '0') {
        container.innerText = "No results find."
    } else {
        for (let song of songArray) {
            let resultCard = document.createElement('div');
            resultCard.classList.add('resultCard');
            container.appendChild('resultCard');
            // album thumbnail
            let albumCard = document.createElement('img');
            albumCard.classList.add('albumCard');
            albumCard.src = `${results[0].artworkUrl100}`;
            resultCard.appendChild('albumCard');

        }
    }



    searchResults.innerHTML = results






};


// call the function 
