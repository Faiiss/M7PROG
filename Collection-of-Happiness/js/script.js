// class Podcast {
//     constructor() {
//       this.episodes = [];
//       this.podcastList = document.querySelector(".podcast-list");
//     }
  
//     async init() {
//       try {
//         const response = await fetch("data/data.json");
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         this.episodes = data.episodes;
//         this.renderEpisodes();
//       } catch (error) {
//         console.error("Error fetching podcast data:", error);
//       }
//     }
  
//     renderEpisodes() {
//       if (this.episodes.length === 0) {
//         console.warn("Geen podcast gevonden");
//         return;
//       }
  
//       // selecteer willekeurige afleveringen uit de lijst
//       let randomEpisodes = [];
//       while (randomEpisodes.length < 4) {
//         let randomIndex = Math.floor(Math.random() * this.episodes.length);
//         let randomEpisode = this.episodes[randomIndex];
//         if (!randomEpisodes.includes(randomEpisode)) {
//           randomEpisodes.push(randomEpisode);
//         }
//       }
  
//       // voeg de afleveringen toe aan het linkerdeel van de pagina als podcast-kaartjes
//       randomEpisodes.forEach(episode => {
//         const podcastCard = document.createElement("div");
//         podcastCard.classList.add("podcast-card");
//         podcastCard.innerHTML = `
//           <img src="${episode.image}" alt="${episode.title}">
//           <div class="podcast-details">
//             <p class="podcast-date">${episode.date}</p>
//             <h3 class="podcast-title">${episode.title}</h3>
//           </div>
//         `;
//         this.podcastList.appendChild(podcastCard);
//       });
//     }
//   }
  
//   const podcast = new Podcast();
//   podcast.init();
  