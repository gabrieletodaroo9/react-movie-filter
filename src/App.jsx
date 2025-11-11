import { useState, useEffect } from 'react'
import FilteredList from './components/FilteredList'
import FilteredForm from './components/FilterForm'
import AddForm from './components/AddForm'
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
    { title: 'La La Land', genre: 'Romantico' },
    { title: 'Matrix', genre: 'Fantascienza' },
    { title: 'Il Cavaliere Oscuro', genre: 'Azione' },
    { title: 'Quasi Amici', genre: 'Commedia' },
    { title: 'Fight Club', genre: 'Thriller' },
    { title: 'Inside Out', genre: 'Commedia' }
  ]

  // ARRAY CREATO PER I GENERI DEI FILM
  const genreList = []
  initialFilmsArray.forEach(film => {
    if (!genreList.includes(film.genre))
      genreList.push(film.genre)
  })

  // VARIABILI DI STATO
  const [activeFilms, setActiveFilms] = useState(initialFilmsArray)
  const [activeGenre, setActiveGenre] = useState("Tutti i generi")
  const [search, setSearch] = useState("")

  useEffect(() => {

    let currentFilms = initialFilmsArray;
    if (activeGenre !== "Tutti i generi") {
      currentFilms = currentFilms.filter(film => film.genre === activeGenre)
    }
    const finalFilteredFilms = currentFilms.filter(film => film.title.toLowerCase().includes(search.toLowerCase()))
    setActiveFilms(finalFilteredFilms)
  }, [activeGenre, search])

  const genreListWithGeneral = ["Tutti i generi", ...genreList]
  return (
    <>
      <header className='text-center mb-5'>
        <h1>Films</h1>
      </header>
      <main>
        <div className="container">
          <AddForm genreList={genreList} />
          <FilteredForm genreListWithGeneral={genreListWithGeneral} activeGenre={activeGenre} setActiveGenre={setActiveGenre} search={search} setSearch={setSearch} />
          <FilteredList activeFilms={activeFilms} />
        </div>
      </main>
    </>
  )
}

export default App
