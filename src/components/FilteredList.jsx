export default function FilteredList({ initialFilmsArray, activeFilms }) {
    return (
        <>
            <div className="card mt-3">
                <div className="card-header">
                    <h1>Filtered Films</h1>
                </div>
                <ul className="list-group list-group-flush">
                    {
                        initialFilmsArray.map(film => (
                            <li key={film.title.trim().toLowerCase()} className="list-group-item">
                                <p>{film.title}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </>

    )
}