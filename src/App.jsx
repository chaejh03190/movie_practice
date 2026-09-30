import serchimg from './assets/Search.svg'
import './App.css'

function App() {
  return(
    <main className='page_1'>
      <header className='header'>
        <h1 className='header_title'>KWU LIKELION THEATER</h1>
        <div className='serchBox'>
          <input
            className='serchBox__input'
            type="text"
            placeholder='검색어를 입력하세요'
          />
          <button className='header__serchButton'>
            <img className='header__serchButton--icon'
            src={serchimg} alt="검색하기" 
            />
          </button> 
        </div>
      </header>
      <div className='DropDownBar'>
        <select name="장르" className='DropDownBar__genre'>
          <option value="action">액션</option>
          <option value="comedy">코미디</option>
        </select>
        <select name="정렬" className='DropDownBar__sort'>
          <option value="최신순">최신순</option>
          <option value="별점순">별점순</option>
        </select>
      </div>
    </main>
  )
}

export default App
