export default function Form({ setActiveGenre, activeGenre, genreList }) {
    return (
        <div className="card">
            <form className="form-inline p-3" >
                <label className="my-1 me-3" htmlFor="genreSelect">Genre:</label>
                <select value={activeGenre} className="custom-select my-1 mr-sm-2 p-2" id="genreSelect" onChange={e => (setActiveGenre(e.target.value))} >
                    {genreList.map(genre => (
                        <option key={genre} value={genre}>{genre}</option>
                    ))}
                </select>
            </form>
        </div>
    )
}