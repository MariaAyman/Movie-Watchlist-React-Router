import {Link} from 'react-router-dom';

const Movie = (props) => {
    console.log(props);
    const {id} = props.match.params;
    console.log(id);
    // eslint-disable-next-line
    const movie = props.movies.find(m => m.id == props.match.params.id);
    console.log(movie);
    if(movie === undefined){
        return(
            <h1>Error: Movie not found!</h1>
        );
    }
    return(
        <div className="container">
            <button type="button" className="btn btn-dark mt-2"><Link to="/" style={{textDecoration: 'none', color: '#fff'}}>back</Link></button>
            <div className="d-flex justify-content-center m-3" {/*style={{height: 313}}*/}>
                <div className=" w-25 h-100 mx-3 d-flex justify-content-center" ><img src={movie.posterUrl} alt="" className="w-100 h-100"/></div>
                <iframe width="700" 
                        height="435" 
                        src={movie.trailer} 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen 
                        title={movie.title} />
            </div>
            <div className="mx-3 px-3 d-flex align-items-center">
            
                <div className="p-3">
                    <h1>{movie.title}</h1>
                    <p>{movie.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Movie;
