import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import no from '../img/1.png';
import {Link} from 'react-router-dom';
import {AiOutlinePlayCircle,AiTwotoneStar} from 'react-icons/ai';

function Detail() {
    const { id } = useParams();
    const {search} = useParams();
    const [data, setdata] = useState({});
    const [data1,setdata1] = useState([]);

    const fetch = () => {
        axios.get(`https://www.omdbapi.com/?i=${id}&apikey=4ce0b95`).then((res) => {
            console.log(res.data);
            setdata(res.data);
        })
    }

    const fetch2 = () =>{
        axios.get(`https://www.omdbapi.com/?s=${search}&apikey=4ce0b95`).then((res) => {
            console.log(res.data)
            setdata1(res.data.Search);
        })
    }

    useEffect(() => {
        fetch()
        fetch2()
    }, [])

    return (
        <div>
            <div className='bg-dark text-white p-5 mt-3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img src={data.Poster == "N/A" ? no : data.Poster} className="img-fluid" />
                        </div>
                        <div className='col-md-8'>
                            <p>Title: {data.Title}</p>
                            <p>Actors: {data.Actors}</p>
                            <p>Director: {data.Director}</p>
                            <p>Language: {data.Language}</p>
                            <p>Description: {data.Plot}</p>
                            <p>Writer: {data.Writer}</p>
                            <p>BoxOffice: {data.BoxOffice}</p>
                            <p>  Runtime: {data.Runtime} <AiOutlinePlayCircle/> </p>
                            <p>imdbRating: {data.imdbRating} <AiTwotoneStar/></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    <h3>Related Movies</h3>
                    <hr></hr>
                </div>
                <div className='row'>
                {data1.slice(0,4).map((e, index) => {
                    return (
                        <div className='col-md-3 mb-3' key={index}>
                            <Link to={`/${e.imdbID}`} className='none'>
                                <div className='box-shadow'>
                                    <img src={e.Poster === "N/A"? no:e.Poster} width={"100%"} height={"350px"} />
                                    <div className='d-flex align-items-center p-2 para justify-content-between'>
                                        <p>Title : {e.Title} </p>
                                        <p>Year : {e.Year}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}

                </div>
            </div>
        </div>
    )
}

export default Detail