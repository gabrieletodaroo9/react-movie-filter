export default function Form({ setActiveGenre, activeGenre, genreList, search, setSearch }) {
    return (
        <div className="card">
            <form onSubmit={e => e.preventDefault()} className="form-inline p-3" >
                <label className="my-1 me-3" htmlFor="genreSelect">Genre:</label>
                <select value={activeGenre} className="custom-select my-1 mr-sm-2 p-2" id="genreSelect" onChange={e => (setActiveGenre(e.target.value))} >
                    {genreList.map(genre => (
                        <option key={genre} value={genre}>{genre}</option>
                    ))}
                </select>
                <div className="input-group my-3">
                    <input type="text" className="form-control" placeholder="Search for title..." value={search} onChange={e => setSearch(e.target.value)} />
                </div>
            </form>
        </div>
    )
}