export default function AddForm({ genreList }) {
    return (
        <div className="card">
            <h3 className="pt-3 ps-3 fw-bold">Add Films</h3>
            <form className="form-inline p-3" >
                <label className="my-1 me-3" htmlFor="genreSelectadd">Genre:</label>
                <select className="custom-select my-1 mr-sm-2 p-2" id="genreSelectadd" >
                    {genreList.map(genre => (
                        <option key={genre} value={genre}>{genre}</option>
                    ))}
                </select>
                <div className="input-group my-3">
                    <input type="text" className="form-control" placeholder="Add the title..." />
                </div>
            </form>
        </div>
    )
}