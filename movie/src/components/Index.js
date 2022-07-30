import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import no from '../img/1.png';
 
function Index() {
    const [data, setdata] = useState([]);
    const [search, setsearch] = useState("iron");
    const fetch = () => {
        axios.get(`https://www.omdbapi.com/?s=${search}&apikey=4ce0b95`).then((res) => {
            console.log(res.data)
            setdata(res.data.Search);
        })
    }

    

    
    const handleChange = (e) =>{
            setsearch(e.target.value);
    }

    const handleKeys = (e) =>{
        if(e.key === 'Enter'){
            fetch2();
        }
    }

    const fetch2 = () => {
        axios.get(`https://www.omdbapi.com/?s=${search}&apikey=4ce0b95`).then((res) => {
            
            setdata(res.data.Search);
            console.log(res.data)
        })
    }

    useEffect(() => {
        fetch()
    }, [])
    return (
        <div className='container mt-5'>
            <div className='row mb-3'>
                <div className='col-md-4'>
                    <h4>Movies {search}</h4>
                    <hr></hr>
                </div>
                <div className='col-md-8'>
                    <div className='d-flex'>
                        <input className='form-control' placeholder='search here movie' value={search} onChange={handleChange} onKeyPress={handleKeys} />
                        <AiOutlineSearch className='icons' />
                    </div>
                </div>
            </div>
            <div className='row'>
                {data.map((e, index) => {
                    return (
                        <div className='col-md-3 mb-3' key={index}>
                            <Link to={`/${e.imdbID}/${search}`} className='none'>
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
    )
}

export default Index