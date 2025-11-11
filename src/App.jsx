import { useState, useEffect } from 'react'
import FilteredList from './components/FilteredList'
import Form from './components/Form'
import './App.css'

function App() {

  // ARRAY INIZIALE DEI FILM
  const initialFilmsArray = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ]
  // ARRAY CREATO PER I GENERI DEI FILM

  const genreList = ["Fantascienza", "Thriller", "Romantico", "Azione"]

  // VARIABILI DI STATO
  const [activeFilms, setActiveFilms] = useState(initialFilmsArray)
  const [activeGenre, setActiveGenre] = useState("tutti i generi")
  return (
    <>
      <header className='text-center mb-5'>
        <h1>Films</h1>
      </header>
      <main>
        <div className="container">
          <Form genreList={genreList} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
          <FilteredList initialFilmsArray={initialFilmsArray} activeFilms={activeFilms} />
        </div>
      </main>
    </>
  )
}

export default App
