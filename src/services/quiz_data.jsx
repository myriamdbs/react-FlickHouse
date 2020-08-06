// const quizzData = [
//   {
//     id: 0,
//     question: `Did Julia Robert play in Pretty Woman?`,
//     options: [`Yes`, `No`],
//     answer: `Yes`
//   },
//   {
//     id: 1,
//     question: `Did Julia Robert play in Batman?`,
//     options: [`Yes`, `No`],
//     answer: `Yes`
//   },
// ];

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

// const fetchMovies = (movies) => {
//   fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_TMBD_KEY}&language=en-US&page=1`)
//     .then(response => response.json())
//     .then((data) => {
//       data.results.forEach((result) => {
//         fetchCredits(result.id);
//         movies.push({id:result.id, title:result.title, actors:});
//       });
//     });
// };

// const QuizzMovies = [];
// fetchMovies(QuizzMovies);


const fetchActors = (arr) => {
  fetch(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.API_TMBD_KEY}&language=en-US&page=1`)
    .then(response => response.json())
    .then((data) => {
      data.results.forEach((result) => {
        arr.push({
          id: result.id,
          name: result.name,
          image: result.profile_path,
          movies: result.known_for.map((movie) => {
            return { title: movie.name || movie.title, poster_path: movie.poster_path, id: movie.id };
          })
        });
      });
    });
};

const actors = [];
fetchActors(actors);
console.log(actors);

const allMovies = [];
const getAllMovies = (actorsArray) => {
  return actorsArray.forEach(actor => allMovies.push(actor.movies));
};

getAllMovies(actors);
console.log(allMovies);

const questionBuilder = (i, actor, movie) => {
  return {
    id: i,
    question: `Did ${actor} play in ${movie}`,
    options: ['Yes', 'No'],
    answer: 'Yes' // getAnswer() with a fetch to API
  };
};

// export default quizzData;
