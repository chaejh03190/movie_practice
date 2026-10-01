import moviePoster from '../../assets/Movieposter.svg';
import './MovieCard.css'
function MovieCard() {
  return (
    <div className="movieCard">
      <img src={moviePoster} alt="영화포스터" />
      <h1 className='movieCard__title'>Movie Name</h1>
      <p className='moiveCard__Rating'>⭐ 7.33333</p>
      <p className='moiveCard__ content'>영화 설명을 주절주절 이 영화 재미있어요 근데 마지막에 주인공이 어쩌고저쩌고해서 결말...</p>
      <p className='moiveCard__openDay'>개봉일 2026-03-01</p>
      <button className='moiveCard__recomend'>Wish</button>
    </div>
  );
}

export default MovieCard;