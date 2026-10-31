import story from '../story.json'
import { highlightText } from '../utils.jsx'

const { meta } = story
const bgUrl = import.meta.env.VITE_IMG_API + meta.background

function SceneScreen({ sceneId, inventory, onChoice, onClose }) {
  const scene = story.scenes[sceneId]
  const location = story.locations[scene.location]
  const imgUrl = location ? import.meta.env.VITE_IMG_API + location.image : null
  const paragraphs = scene.text.split('\n')

  // показываем только те варианты, для которых у игрока есть нужный предмет
  const choices = scene.choices.filter(
    (choice) => !choice.if?.has || inventory.includes(choice.if.has)
  )

  return (
    <main className="screen screen__scene">
      <img src={bgUrl} alt="" className="screen__img" />
      <div className="bubble-container">
        <button
          type="button"
          className="close__btn"
          onClick={onClose}
          aria-label="Закрыть и вернуться в начало"
        >
         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7606 2.9981C12.1074 2.71523 12.6189 2.73539 12.9422 3.05866C13.2655 3.38195 13.2856 3.89343 13.0027 4.24026L12.9422 4.30733L9.24947 8.00007L12.9422 11.6928L13.0027 11.7599C13.2856 12.1067 13.2655 12.6182 12.9422 12.9415C12.6189 13.2647 12.1074 13.2849 11.7606 13.002L11.6935 12.9415L8.0008 9.24874L4.30808 12.9415C3.96323 13.2863 3.40426 13.2863 3.05941 12.9415C2.71457 12.5966 2.71457 12.0377 3.05941 11.6928L6.75214 8.00007L3.05941 4.30733L2.99886 4.24026C2.71596 3.89343 2.73612 3.38196 3.05941 3.05866C3.38271 2.73536 3.89418 2.7152 4.24101 2.9981L4.30808 3.05866L8.0008 6.7514L11.6935 3.05866L11.7606 2.9981Z"/>
</svg>
        </button>

        <div className="bubble scene__bubble">
          {imgUrl && <img className="invitation__img" src={imgUrl} alt="" />}
          <div className="step">
            <div className="intro__hero">
              <p className="intro__kicker">{scene.kicker}</p>
              <h3 className="intro__title scene__title">{scene.title}</h3>
            </div>

            <div className="intro__desc text__scene">
              {paragraphs.map((text, i) => (
                <p key={i}>{highlightText(text)}</p>
              ))}
              {scene.question && <span className="question">{scene.question}</span>}
            </div>

            {choices.length === 1 ? (
              <button
                type="button"
                className="intro__button"
                onClick={() => onChoice(choices[0])}
              >
                {choices[0].text}
              </button>
            ) : (
              <ul className="items">
                {choices.map((choice, i) => (
                  <li
                    key={choice.text}
                    className="item"
                    role="button"
                    tabIndex={0}
                    onClick={() => onChoice(choice)}
                    onKeyDown={(e) => e.key === 'Enter' && onChoice(choice)}
                  >
                    <p className="item__number">#{i + 1}</p>
                    {choice.text}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <p className="info__preax">
          Проект выполнен в рамках стажировки <span>PREAX</span>
        </p>
      </div>
    </main>
  )
}

export default SceneScreen