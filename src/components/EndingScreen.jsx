import story from '../story.json'
import { highlightText, fixEndingTitle } from '../utils.jsx'

const { meta } = story
const bgUrl = import.meta.env.VITE_IMG_API + meta.background


function EndingScreen({ endingId, onRestart }) {
  const ending = story.endings[endingId]
  const endingImg = import.meta.env.VITE_IMG_API + ending.image
  const paragraphs = ending.text.split('\n')

  return (
    <main className= {`screen screen__scene screen__ending--${endingId}`}>
      <img src={bgUrl} alt="" className="screen__img" />
      <div className="bubble-container">
        <div className="bubble scene__bubble ending__bubble">
          <img className="invitation__img" src={endingImg} alt="" />
          <div className="step">
            <div className="intro__hero">
              <p className="intro__kicker">Твоя роль</p>
              <h3 className="intro__title scene__title ending__title">{fixEndingTitle(ending.title)}</h3>
            </div>
            <div className="intro__desc text__scene">
              {paragraphs.map((text, i) => (
                <p key={i}>{highlightText(text)}</p>
              ))}
            </div>
            <button className="intro__button ending__button" type="button" onClick={onRestart}>
              Пройти ещё раз
            </button>
          </div>
        </div>
        <p className="info__preax">
          Проект выполнен в рамках стажировки <a href="https://preax.ru" target="_blank" rel="noopener noreferrer">PREAX</a>
        </p>
      </div>
    </main>
  )
}

export default EndingScreen