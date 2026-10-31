import { useState } from 'react'
import './App.css'
import story from './story.json'
import StartScreen from './components/StartScreen'
import SceneScreen from './components/SceneScreen'
import EndingScreen from './components/EndingScreen'

function App() {
  const [screen, setScreen] = useState('start')   // 'start' | id сцены | id концовки
  const [inventory, setInventory] = useState([])

  const resetGame = () => {
    setScreen('start')
    setInventory([])
  }

  // вызывается при клике на любой вариант выбора
  const handleChoice = (choice) => {
    // 1. применить эффекты (выдать предметы)
    choice.effects?.forEach((effect) => {
      if (effect.add) setInventory((prev) => [...prev, effect.add])
    })
    // 2. перейти в следующую сцену или концовку
    setScreen(choice.next)
  }

  if (screen === 'start') {
    return <StartScreen onStart={() => setScreen('invitation')} />
  }

  if (story.endings[screen]) {
    return <EndingScreen endingId={screen} onRestart={resetGame} />
  }

  return (
    <SceneScreen
      sceneId={screen}
      inventory={inventory}
      onChoice={handleChoice}
      onClose={resetGame}
    />
  )
}



export default App
