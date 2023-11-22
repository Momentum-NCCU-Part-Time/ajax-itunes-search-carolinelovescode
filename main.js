// const musicURL = "https://itunes.apple.com/search?term="
const iTunesUrl = "https://itunes.apple.com/search?term="
// const prevUrl =
const everything = document.querySelector(".container");
let musicName = document.querySelector("#musicName");
let searchText = document.querySelector(".searchText");
let audioTag = document.getElementById('audioBox');

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
        showResults(data.results);
        console.log(data)
    })


};

// display the data

function showResults(songArray) {
    everything.innerHTML = ""
    if (songArray.length === 0) {
        everything.innerText = "No results find."
    } else {
        for (let song of songArray) {
            let resultCard = document.createElement('div');
            resultCard.classList.add('resultCard');
            everything.appendChild(resultCard);
            // album thumbnail, template for remaining information
            let albumCard = document.createElement('img');
            albumCard.classList.add('albumCard');
            albumCard.src = `${song.artworkUrl100}`;
            resultCard.appendChild(albumCard);
            // artist Name
            let artistName = document.createElement('h3');
            artistName.classList.add('artistName');
            artistName.innerText = `${song.artistName}`;
            resultCard.appendChild(artistName);
            // song name 
            let songTitle = document.createElement('p');
            songTitle.classList.add('songTitle');
            songTitle.innerText = `${song.trackName}`;
            resultCard.appendChild(songTitle);
            // music play src 
            let songPrev = document.createElement('button');
            songPrev.classList.add('songPrev');
            songPrev.src = `${song.previewUrl}`;
            songPrev.innerText = "PLAY";
            resultCard.appendChild(songPrev);
            // plays the music 
            songPrev.addEventListener('click', (e) => {
                e.preventDefault();
                audioTag.src = `${song.previewUrl}`;

            })


            // adding event listeners for when clicking on the play button
        }
    };




    // you also need to make the play button with each song item 

    songCard.appendChild(playButton)







};


// call the function 
