import moviePoster from './assets/Movieposter.svg';
function MovieCard({ movie }) {
  return (
    <div className="movieCard">
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
    </div>
  );
}

export default MovieCard;