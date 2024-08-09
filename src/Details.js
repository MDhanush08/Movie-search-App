import React from 'react';
import "./App.css";

function Details({selected,close}) {
  return (
    <div className='d-flex  align-items-center justify-content-center'>
        <div className='container mt-5'>
        <button onClick={close} className='btn btn-danger text-align-center'>Home</button>
                 <div className='row mt-5'>
                     <div className='col-12 col-md-6 text-center'>
                            <img className='imageDetail ' src={selected.Poster} alt=''/>
                     </div>
                     <div className=' Detailspara col-12  col-md-6 text-white p-3  mt-5 mt-md-0'>
                        <h2>{selected.Title}</h2>
                        <p>Released Date : {selected.Released}</p>
                        <p>{selected.year}</p>
                        <p>Rating ⭐: {selected.imdbRating}</p>
                        <p>{selected.Plot}</p>     
                        <p>Director : {selected.Director}</p>
                        <p>Hero: {selected.Actors.split(', ')[0]}</p>
                        

                        {/* <button onClick={close} className='btn btn-danger' >Close</button> */}
                     </div>
                 </div>
        </div>

    </div>
  )
}

export default Details