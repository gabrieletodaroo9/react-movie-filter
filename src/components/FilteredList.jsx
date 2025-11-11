export default function FilteredList({ activeFilms }) {
    return (
        <>
            <div className="card my-4">
                <div className="card-header">
                    <h3 className="text-center fw-bold">Films List</h3>
                </div>
                <ul className="list-group list-group-flush">
                    {
                        activeFilms.map(film => (
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