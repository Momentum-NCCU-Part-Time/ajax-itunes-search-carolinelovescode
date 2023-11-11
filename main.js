// const musicURL = "https://itunes.apple.com/search?term="
const musicUrl = "https://itunes.apple.com/search?term="

let findButton = document.querySelectorAll('.findButton')

// add an event listener for the submit button, when you press the submit button you want it to fetch (get) data from the itunes app


let searchForm = document.getElementById('lookUp')

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let term = document.getElementById('musicName');
    getMusic(term);
});

function getMusic(term) {
    fetch(musicUrl + term, {
        method: 'GET',
        mode: "cors",
        headers: { "Content-Type": "application/json" },
    }).then(response => response.json()
        .then(response => {
            this.getMusic()

        }))
}



function showResults(display) {
    let results = [];
    // let search = JSON.parse(display);

    const searchResults = document.getElementsByClassName('searchResults');
    searchResults.innerHTML = results
};


// call the function 
