import React, {useState} from 'react';
                
const Filter = (props) => {
    const [filterRate, setRate] = useState(0);
    const [movieName, setName] = useState('');

    // useEffect(() => {
    //     if(filterRate != null){
    //         props.filterRate(filterRate);
    //     }
    // },[filterRate]);

    const handleFilter = () => {
        if(movieName !== ""){
            props.filter(filterRate, movieName);
        }
        else{
            props.filterRate(filterRate);
        }
    }

    // const handleSearch = () =>{
    //     props.filterSearch(movieName);
    // }

    const handleReset = () => {
        setRate(0);
        setName("");
        props.reset();
    }

    return(
        <div className="container" style={{width: 800}}>
            <div className="row">
                <div className="col m-4">
                    <label htmlFor="customRange2" className="form-label">Filter Rate</label><br/>
                    <input type="range" className="form-range" min="0" max="10" id="customRange2" value={filterRate} onChange={(e) => setRate(e.target.value)} style={{width: 200}}></input>
                    <div>{filterRate}</div>
                    <button type="button" className="btn btn-dark mt-2" onClick={handleFilter}>Filter Search/Rate</button>
                </div>
                <div className="col m-4">
                    <label htmlFor="customRange2" className="form-label">Search Movie by name:</label>
                    <input type="text" className="form-control" id="exampleFormControlInput5" placeholder="Ex: The House of Gaunt" value={movieName} onChange={(e) => setName(e.target.value)} style={{width: 200}}/>
                    {/* <button type="button" className="btn btn-dark mt-4" onClick={handleSearch}>Search</button> */}
                </div>
                <button type="button" className="btn btn-dark align-self-center" onClick={handleReset} style={{width: 200, height: 50}}>Reset</button>
            </div>
        </div>
    );
}

export default Filter;