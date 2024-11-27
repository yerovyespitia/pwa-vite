import { useState } from 'react'
import PWABadge from './PWABadge.jsx'
import './App.css'

function App() {
  const [guess, setGuess] = useState('')
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1)
  const [message, setMessage] = useState('')

  const handleGuess = () => {
    if (!guess) {
      setMessage('Please enter a number')
      return
    }

    const guessedNumber = parseInt(guess)
    if (guessedNumber === number) {
      setMessage('Acertaste el número!.')
    } else if (guessedNumber < number) {
      setMessage('El número es mayor. Sigue intentando.')
    } else {
      setMessage('El número es menor. Sigue intentando.')
    }

    setGuess('')
  }

  const handleReset = () => {
    setNumber(Math.floor(Math.random() * 100) + 1)
    setMessage('')
    setGuess('')
  }

  return (
    <div className='container'>
      <h1 className='title'>Adivina el número</h1>
      <input
        type='number'
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className='input'
      />
      <div className='buttons'>
        <button onClick={handleGuess}>Adivinar</button>
        <button onClick={handleReset}>Reiniciar</button>
      </div>
      <p className='message'>{message}</p>
      <PWABadge />
    </div>
  )
}

export default App
