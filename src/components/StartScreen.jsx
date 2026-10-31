import story from '../story.json'
import { highlightText } from '../utils.jsx'

const { meta } = story
const bgUrl = import.meta.env.VITE_IMG_API + meta.background


function StartScreen({ onStart }) {
  return (
    <main className="screen">
      <img src={bgUrl} alt="" className="screen__img" />
      <div className="bubble-container">
        <div className='bubble'>
          <div className='intro__hero'>
            <p className='intro__kicker'>{meta.intro.kicker}</p>
            <h3 className='intro__title'>{meta.intro.title}</h3>
          </div>
          <div className='intro__desc'>
            <p>{highlightText(meta.intro.paragraphs[0])}</p>
            <p>{highlightText(meta.intro.paragraphs[1])}</p>
          </div>
          <button className='intro__button' onClick={onStart}>{meta.intro.button}</button>
        </div>
        <p className='info__preax'>Проект выполнен в рамках стажировки <a href="https://preax.ru" target="_blank" rel="noopener noreferrer">PREAX</a></p>
      </div>
    </main>
  )
}

export default StartScreen