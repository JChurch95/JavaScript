document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM ready...FAMILY');
    const root = document.querySelector('#root');
    const movieForm = document.querySelector('#movieLookup');

    movieForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const movieTitle = formData.get('movieTitle');
        lookupMovie(movieTitle);
    });

    function lookupMovie(title) {
        const url = `https://www.omdbapi.com/?apikey=d2fb9d49&t=${title}&plot=full`;
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                generateMovie(data);
            });
    }

    function generateMovie(movie) {
        // Clear previous results
        root.innerHTML = '';

        // Create and append elements for each piece of information
        const categories = ['Poster', 'Title', 'Type', 'Rated', 'Released', 'Runtime', 'Genre', 'Director', 'Actors', 'Plot'];
        
        categories.forEach(category => {
            if (category === 'Poster') {
                if (movie.Poster && movie.Poster !== 'N/A') {
                    const poster = document.createElement('img');
                    poster.src = movie.Poster;
                    poster.alt = `${movie.Title} poster`;
                    root.appendChild(poster);
                }
            } else {
                const element = document.createElement(category === 'Title' ? 'h1' : 'p');
                element.innerHTML = `<strong>${category}:</strong> ${movie[category]}`;
                root.appendChild(element);
            }
        });
    }
});