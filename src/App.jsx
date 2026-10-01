import serchimg from './assets/Search.svg'
import MenuIcon from './assets/Menu.svg'
import MovieCard from './components/MovieCard/MovieCard.jsx'
import './App.css'

function App() {
  return(
    <main className='page_1'>
      <header className='header'>
        <h1 className='header__title'>KWU LIKELION THEATER</h1>
        <div className='header__serchBox'>
          <input
            className='header__serchBox--input'
            type="text"
            placeholder='검색어를 입력하세요'
          />
          <button className='header__serchButton'>
            <img className='header__serchButton--icon'
            src={serchimg} alt="검색하기" 
            />
          </button> 
        </div>
        <button className='header__Menu'>
          <img className='header__Menu--icorn' src={MenuIcon} alt="메뉴" />
        </button>
      </header>
      <div className='DropDownBar'>
        <select className='DropDownBar__genre'>
          <option value="장르">장르</option>
          <option value="action">액션</option>
          <option value="comedy">코미디</option>
        </select>
        <select className='DropDownBar__sort'>
          <option value="정렬">정렬</option>
          <option value="최신순">최신순</option>
          <option value="별점순">별점순</option>
        </select>
      </div>
      <div className='Mylist'>
        <h1 className='Mylist_title'>My Wish List</h1>
        
      </div>
      <div className='Page__MovieCard'>
        <MovieCard className='Page__MovieCard--card_1'/>
        <MovieCard className='Page__MovieCard--card_2'/>
        <MovieCard className='Page__MovieCard--card_3'/>
        <MovieCard className='Page__MovieCard--card_4'/>
        <MovieCard className='Page__MovieCard--card_5'/>
        <MovieCard className='Page__MovieCard--card_6'/>
      </div>
      <div className='bottom'>
        <p className='bottom__title'>LIKELION X KWU</p>
        <p className='bottom__role'>14TH FRONTEND</p>
      </div>
    </main>
  )
}

export default App
