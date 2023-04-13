// // Select the element to append the podcast tiles to
// const podcastTiles = document.querySelector('.podcasts__tiles');

// // Fetch the data from the JSON file
// fetch('/data/data.json')
//   .then(response => response.json())
//   .then(data => {
//     // Shuffle the array of podcast episodes
//     const shuffledEpisodes = shuffleArray(data.episodes);

// // Loop through the first 4 shuffled episodes and create a tile for each one
// for (let i = 0; i < 4; i++) {
//   const episode = shuffledEpisodes[i];

//       // Create the tile element and its contents
//       const tile = document.createElement('li');
//       tile.classList.add('podcasts__tile');
//       tile.innerHTML = `
//         <div class="podcasts__tile-right">
//           <img src="${episode.img}" alt="${episode.title}">
//         </div>
//         <div class="podcasts__tile-left">
//           <div class="podcasts__tile-date">${formatDate(episode["date (dd-mm-yyyy)"])}</div>
//           <div class="podcasts__tile-title">${episode.title}</div>
//         </div>
//       `;

//       // Append the tile to the podcast tiles element
//       podcastTiles.appendChild(tile);
//     }
//   })
//   .catch(error => console.error(error));

// // Function to shuffle an array
// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

// // Function to format the date in the "dd-mm-yyyy" format
// function formatDate(dateString) {
//   const dateParts = dateString.split("-");
//   const year = dateParts[2];
//   const month = dateParts[1];
//   const day = dateParts[0];
//   return `${day}-${month}-${year}`;
// }

// // Select the featured podcast element
// const featuredPodcast = document.querySelector('.podcasts__featured');

// // Fetch the data from the JSON file
// fetch('/data/data.json')
//   .then(response => response.json())
//   .then(data => {
//     // Get the first episode from the data
//     const episode = data.episodes[0];

//     // Set the contents of the featured podcast element
//     featuredPodcast.innerHTML = `
//       <div class="podcasts__featured-left">
//         <div class="podcasts__featured-right">
//           <img src="${episode.img}" alt="${episode.title}">
//         </div>
//         <div class="podcasts__featured-date">${formatDate(episode["date (dd-mm-yyyy)"])}</div>
//         <div class="podcasts__featured-title">${episode.title}</div>
//         <p class="podcasts_sum">${episode.summary}</p>
//         <audio controls>
//           <source src="${episode.audio}" type="audio/mpeg">
//           Your browser does not support the audio element.
//         </audio>
//       </div>
//     `;
//   })
//   .catch(error => console.error(error));

// // Function to format the date in the "dd-mm-yyyy" format
// function formatDate(dateString) {
//     const dateParts = dateString.split("-");
//     const year = dateParts[2];
//     const month = dateParts[1];
//     const day = dateParts[0];
//     return `${day}-${month}-${year}`;
//   }



// Select the element to append the podcast tiles to
const podcastTiles = document.querySelector('.podcasts__tiles');

// Select the featured podcast element
const featuredPodcast = document.querySelector('.podcasts__featured');



// Fetch the data from the JSON file
fetch('/data/data.json')
    .then(response => response.json())
    .then(data => {
        // Shuffle the array of podcast episodes
        const shuffledEpisodes = shuffleArray(data.episodes);

        // Loop through the first 4 shuffled episodes and create a tile for each one
        for (let i = 0; i < 4; i++) {
            const episode = shuffledEpisodes[i];

            // Create the tile element and its contents
            const tile = document.createElement('li');
            tile.classList.add('podcasts__tile');
            tile.innerHTML = `
        <div class="podcasts__tile-right">
          <img src="${episode.img}" alt="${episode.title}">
        </div>
        <div class="podcasts__tile-left">
          <div class="podcasts__tile-date">${formatDate(episode["date (dd-mm-yyyy)"])}</div>
          <div class="podcasts__tile-title">${episode.title}</div>
        </div>
      `;
            // Fetch the data from the JSON file
            fetch('/data/data.json')
                .then(response => response.json())
                .then(data => {
                    // Get the first episode from the data
                    const episode = data.episodes[0];

                    // Set the contents of the featured podcast element
                    featuredPodcast.innerHTML = `
      <div class="podcasts__featured-left">
        <div class="podcasts__featured-right">
          <img src="${episode.img}" alt="${episode.title}">
        </div>
        <div class="podcasts__featured-date">${formatDate(episode["date (dd-mm-yyyy)"])}</div>
        <div class="podcasts__featured-title">${episode.title}</div>
        <p class="podcasts_sum">${episode.summary}</p>
        <audio controls>
          <source src="${episode.audio}" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </div>
    `;
                })
                .catch(error => console.error(error));
            // Add a click event listener to each tile to display the clicked episode in the featured podcast element
            tile.addEventListener('click', () => {
                // Set the contents of the featured podcast element with the details of the clicked episode
                featuredPodcast.innerHTML = `
          <div class="podcasts__featured-left">
            <div class="podcasts__featured-right">
              <img src="${episode.img}" alt="${episode.title}">
            </div>
            <div class="podcasts__featured-date">${formatDate(episode["date (dd-mm-yyyy)"])}</div>
            <div class="podcasts__featured-title">${episode.title}</div>
            <p class="podcasts_sum">${episode.summary}</p>
            <audio controls>
              <source src="${episode.audio}" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>
          </div>
        `;
            });

            // Append the tile to the podcast tiles element
            podcastTiles.appendChild(tile);
        }
    })
    .catch(error => console.error(error));

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to format the date in the "dd-mm-yyyy" format
function formatDate(dateString) {
    const dateParts = dateString.split("-");
    const year = dateParts[2];
    const month = dateParts[1];
    const day = dateParts[0];
    return `${day}-${month}-${year}`;
}



