export const quizzData = [
  {
    id: 0,
    question: `Did Julia Robert play in Pretty Woman?`,
    options: [`Yes`, `No`],
    answer: `Yes`
  },
  {
    id: 1,
    question: `Did Julia Robert play in Forrest Gump?`,
    options: [`Yes`, `No`],
    answer: `No`
  },
];

// const randomChoice = (arr) => {
//   const randIndex = Math.floor(Math.random() * arr.length);
//   return arr[randIndex];
// };

// MAY BE USEFUL FOR GETANSWER
// const fetchCredits = (movieId) => {
//   fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.API_TMBD_KEY}`)
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// };

// const fetchActorsAndMovies = (actorsArr, moviesArr) => {
//   fetch(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.API_TMBD_KEY}&language=en-US&page=1`)
//     .then(response => response.json())
//     .then((data) => {
//       data.results.forEach((result) => {
//         key = result.id;
//         actorsArr.push({ id: result.id, name: result.name, image: result.profile_path });
//         result.known_for.forEach((movie) => {
//           moviesArr.push({ title: movie.name || movie.title, poster_path: movie.poster_path, id: movie.id });
//         });
//       });
//     });
// };


// const fetchActor = (i, actor) => {
//   fetch(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.API_TMBD_KEY}&language=en-US&page=1`)
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data.results);
//       console.log(data.results[i].id);
//        return { id: data.results[i].id, name: data.results[i].name, image: data.results[i].profile_path };
//     });
// };

// const quizzBuilder = () => {
//   const questions = [];
//   for (let i = 0; i < 5; i++) {
//     const actor = fetchActor(i);
//     questions.push({
//       id: i,
//       question: `Did ${actor.name} play in ZZZZ`,
//       options: ['Yes', 'No'],
//       answer: 'Yes' // getAnswer()
//     });
//   }
//   return questions;
// };

// const bestActor = fetchActor(1);
// console.log(bestActor);

// const quizzBuilder = () => {
//   const id = 1;
//   const randomActor = randomChoice(actors);
//   console.log(randomActor);
//   const randomMovie = randomChoice(movies);
//   const question = questionBuilder(id, randomActor, randomMovie);
//   console.log(question);
// };



// export default quizzData;
