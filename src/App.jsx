import { useState, useEffect } from 'react'
import './App.css'
import { EVENTS_DATABASE } from './events.js'

// Obtener evento del día
function getTodaysEvent() {
  const today = new Date().toDateString()
  const index = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % EVENTS_DATABASE.length
  return EVENTS_DATABASE[index]
}

// Obtener evento aleatorio
function getRandomEvent(category = null) {
  let events = EVENTS_DATABASE
  if (category && category !== 'all') {
    events = EVENTS_DATABASE.filter(e => e.category === category)
  }
  const index = Math.floor(Math.random() * events.length)
  return events[index]
}

// Calcular temperatura basada en diferencia de años
function getTemperature(diff) {
  const absDiff = Math.abs(diff)
  if (absDiff <= 5) return { level: 'VERY_HOT', emoji: '🔥🔥', text: '¡Muy caliente!' }
  if (absDiff <= 15) return { level: 'HOT', emoji: '🔥', text: 'Caliente' }
  if (absDiff <= 40) return { level: 'WARM', emoji: '🌡️', text: 'Templado' }
  if (absDiff <= 80) return { level: 'COLD', emoji: '❄️', text: 'Frío' }
  if (absDiff <= 150) return { level: 'VERY_COLD', emoji: '🧊', text: 'Muy frío' }
  return { level: 'FREEZING', emoji: '🧊🧊', text: 'Congelado' }
}

// Configuración de pistas
const HINTS_CONFIG = [
  { key: 'category', icon: '📂', label: 'Categoría' },
  { key: 'century', icon: '📅', label: 'Siglo' },
  { key: 'continent', icon: '🌍', label: 'Continente' },
  { key: 'person', icon: '👤', label: 'Personaje clave' },
  { key: 'description', icon: '📝', label: 'Descripción' },
  { key: 'decade', icon: '🔟', label: 'Década' }
]

// Categorías disponibles
const CATEGORIES = [
  { id: 'all', name: 'Todas', icon: '🌍' },
  { id: 'Guerras', name: 'Guerras', icon: '⚔️' },
  { id: 'Arte', name: 'Arte', icon: '🎨' },
  { id: 'Ciencia', name: 'Ciencia', icon: '🔬' },
  { id: 'Política', name: 'Política', icon: '👑' },
  { id: 'Deportes', name: 'Deportes', icon: '⚽' },
  { id: 'Exploración', name: 'Exploración', icon: '🚀' }
]

function App() {
  const [gameMode, setGameMode] = useState('daily')
  const [category, setCategory] = useState('all')
  const [secretEvent, setSecretEvent] = useState(null)
  const [inputValue, setInputValue] = useState('')
  const [attempts, setAttempts] = useState([])
  const [gameStatus, setGameStatus] = useState('playing')
  const [message, setMessage] = useState(null)
  const [showResult, setShowResult] = useState(false)
  
  // Estadísticas modo infinito
  const [infiniteStats, setInfiniteStats] = useState({
    played: 0,
    won: 0,
    currentStreak: 0,
    maxStreak: 0
  })

  useEffect(() => {
    resetGame()
  }, [gameMode, category])

  const resetGame = () => {
    if (gameMode === 'daily') {
      setSecretEvent(getTodaysEvent())
    } else {
      setSecretEvent(getRandomEvent(category))
    }
    setAttempts([])
    setGameStatus('playing')
    setShowResult(false)
    setInputValue('')
  }

  const handleSubmit = () => {
    if (!inputValue.trim() || gameStatus !== 'playing') return

    const guessYear = parseInt(inputValue.trim())
    if (isNaN(guessYear)) {
      showMessage('❌ Introduce un año válido', 'error')
      return
    }

    const diff = guessYear - secretEvent.year
    const isCorrect = diff === 0
    const temperature = getTemperature(diff)
    const direction = diff < 0 ? '↑' : diff > 0 ? '↓' : '✓'

    setAttempts([...attempts, { 
      year: guessYear, 
      diff, 
      temperature, 
      direction,
      correct: isCorrect 
    }])
    setInputValue('')

    if (isCorrect) {
      setGameStatus('won')
      setShowResult(true)
      showMessage('✅ ¡Correcto!', 'success')
      
      if (gameMode === 'infinite') {
        setInfiniteStats(prev => ({
          ...prev,
          won: prev.won + 1,
          played: prev.played + 1,
          currentStreak: prev.currentStreak + 1,
          maxStreak: Math.max(prev.maxStreak, prev.currentStreak + 1)
        }))
      }
    } else {
      if (attempts.length + 1 >= 6) {
        setGameStatus('lost')
        setShowResult(true)
        showMessage('❌ Game Over', 'error')
        
        if (gameMode === 'infinite') {
          setInfiniteStats(prev => ({
            ...prev,
            played: prev.played + 1,
            currentStreak: 0
          }))
        }
      } else {
        showMessage(`${temperature.emoji} ${temperature.text} ${direction}`, 'info')
      }
    }
  }

  const showMessage = (text, type) => {
    setMessage({ text, type })
    setTimeout(() => setMessage(null), 2500)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSubmit()
  }

  const shareResult = () => {
    const modeText = gameMode === 'daily' ? 'Modo Diario' : 'Modo Infinito'
    const status = gameStatus === 'won' 
      ? `¡Acerté el año de "${secretEvent.event}" en ${attempts.length} intentos!` 
      : `No acerté el año de "${secretEvent.event}" 😢`
    const text = `CHRONO-LE 🏛️ ${modeText}\n\n${status}\n📅 Año: ${secretEvent.year}\n\nchronole.app`
    navigator.clipboard.writeText(text)
    showMessage('¡Copiado al portapapeles!', 'success')
  }

  const revealedHintsCount = Math.min(attempts.length, HINTS_CONFIG.length)

  if (!secretEvent) return <div className="loading">Cargando...</div>

  return (
    <div className="container">
      <header className="header">
        <h1>🏛️ CHRONO-LE</h1>
        <p>Adivina el año del evento histórico</p>
      </header>

      {/* Selector de modo */}
      <div className="game-mode-selector">
        <button 
          className={`mode-btn ${gameMode === 'daily' ? 'active' : ''}`}
          onClick={() => setGameMode('daily')}
        >
          📅 Diario
        </button>
        <button 
          className={`mode-btn ${gameMode === 'infinite' ? 'active' : ''}`}
          onClick={() => setGameMode('infinite')}
        >
          ♾️ Infinito
        </button>
      </div>

      {/* Selector de categoría (solo en modo infinito) */}
      {gameMode === 'infinite' && (
        <div className="category-selector">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`category-btn ${category === cat.id ? 'active' : ''}`}
              onClick={() => setCategory(cat.id)}
              title={cat.name}
            >
              {cat.icon}
            </button>
          ))}
        </div>
      )}

      {/* Info del juego */}
      <div className="game-info">
        {gameMode === 'daily' ? (
          <>
            <div className="day">Día #{new Date().getDate() + 100}</div>
            <div className="category">🌍 Un evento histórico al día</div>
          </>
        ) : (
          <>
            <div className="day">Modo Infinito</div>
            <div className="category">
              🔥 Racha: {infiniteStats.currentStreak} | ✅ {infiniteStats.won}/{infiniteStats.played}
            </div>
          </>
        )}
      </div>

      {/* Evento misterioso (oculto hasta resolver) */}
      <div className="event-card">
        {gameStatus === 'playing' ? (
          <>
            <div className="event-icon">❓</div>
            <div className="event-text">Evento Histórico Misterioso</div>
            <div className="event-hint">Usa las pistas para descubrir de qué evento se trata...</div>
          </>
        ) : (
          <>
            <div className="event-icon">{secretEvent.category === 'Guerras' ? '⚔️' : 
              secretEvent.category === 'Arte' ? '🎨' :
              secretEvent.category === 'Ciencia' ? '🔬' :
              secretEvent.category === 'Política' ? '👑' :
              secretEvent.category === 'Deportes' ? '⚽' : '🚀'}</div>
            <div className="event-text">{secretEvent.event}</div>
          </>
        )}
      </div>

      {/* Input de año */}
      <div className="input-section">
        <div className="input-wrapper">
          <input
            type="number"
            className="year-input"
            placeholder="¿Qué año?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={gameStatus !== 'playing'}
            min="-3000"
            max="2026"
          />
          <button 
            className="submit-btn" 
            onClick={handleSubmit}
            disabled={gameStatus !== 'playing'}
          >
            →
          </button>
        </div>
      </div>

      {/* Intentos con termómetro */}
      {attempts.length > 0 && (
        <div className="attempts-section">
          <div className="attempts-title">
            Intentos ({attempts.length}/6)
          </div>
          <div className="attempt-list">
            {attempts.map((attempt, index) => (
              <div 
                key={index} 
                className={`attempt-item ${attempt.correct ? 'correct' : ''}`}
              >
                <span className="attempt-number">{index + 1}</span>
                <span className="attempt-year">{attempt.year}</span>
                <span className="attempt-temp">{attempt.temperature.emoji}</span>
                <span className="attempt-direction">{attempt.direction}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pistas */}
      <div className="hints-section">
        <div className="hints-title">🔍 Pistas desbloqueadas</div>
        <div className="hint-list">
          {HINTS_CONFIG.map((hint, index) => {
            const isRevealed = index < revealedHintsCount
            const value = secretEvent[hint.key]
            
            return (
              <div 
                key={hint.key} 
                className={`hint-item ${isRevealed ? 'revealed' : 'locked'}`}
              >
                <span className="hint-icon">{hint.icon}</span>
                <div className="hint-content">
                  <div className="hint-label">{hint.label}</div>
                  <div className={`hint-value ${!isRevealed ? 'hidden' : ''}`}>
                    {isRevealed ? value : '???'}
                  </div>
                </div>
                {!isRevealed && <span className="hint-lock">🔒</span>}
              </div>
            )
          })}
        </div>
      </div>

      {/* Mensaje */}
      {message && (
        <div className={`message ${message.type} show`}>
          {message.text}
        </div>
      )}

      {/* Modal resultado */}
      {showResult && (
        <div className="modal-overlay" onClick={() => setShowResult(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-emoji">{gameStatus === 'won' ? '🏆' : '😢'}</div>
            <div className="modal-title">
              {gameStatus === 'won' ? '¡ACERTADO!' : 'GAME OVER'}
            </div>
            <div className="modal-event">{secretEvent.event}</div>
            <div className="modal-year">📅 Año {secretEvent.year}</div>
            <div className="modal-stats">
              {gameStatus === 'won' 
                ? `${attempts.length} intentos • Nivel: ${attempts.length <= 2 ? 'Historiador' : attempts.length <= 4 ? 'Estudioso' : 'Aprendiz'}`
                : 'El año correcto era:'
              }
            </div>
            {gameMode === 'infinite' && (
              <div className="infinite-stats">
                🔥 Racha actual: {infiniteStats.currentStreak}
                <br/>
                📊 Total: {infiniteStats.won}/{infiniteStats.played} acertados
              </div>
            )}
            <button className="share-btn" onClick={shareResult}>
              📤 Compartir resultado
            </button>
            <button className="play-again-btn" onClick={resetGame}>
              {gameMode === 'infinite' ? 'Siguiente evento →' : 'Jugar de nuevo'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
