import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "./Search";
import axios from 'axios';
import Result from "./Result";
import Details from "./Details";

function App() { 
  const [state,setState] =useState({
    search:"",
    results:[],
    selected:{}
  })


  const openDetail =(id) => {
    axios.get("https://www.omdbapi.com/?i="+id+'&apikey=2ba8f3f4')
    .then(({data}) => {
      setState((prevState) => { return {...prevState,selected: data}})
   }).catch(err => console.log(err))
    
   }


   const handleInput = (event) => {
    const value = event.target.value;
    setState(prevState => ({ ...prevState, search: value }));

    if (value) {
      axios
        .get(`https://www.omdbapi.com/?i=tt3896198&apikey=2ba8f3f4&s=${value}`)
        .then(res => {
          if (res.data.Response === 'True') {
            setState(prevState => ({
              ...prevState,
              results: res.data.Search,
              error: ''
            }));
          } else {
            setState(prevState => ({
              ...prevState,
              results: [],
              error: 'Movie not found'
            }));
          }
        })
        .catch(err => {
          setState(prevState => ({
            ...prevState,
            results: [],
            error: 'Movie not found'
          }));
        });
    } else {
      setState(prevState => ({
        ...prevState,
        results: [],
        error: ''
      }));
    }
  };


  const close = ()=>{
    setState((prevState) => { return {...prevState,selected: {}}})
  }

  return (
    <div className="w-100 main-wrapper d-flex flex-column align-items-center
     min-vh-100">
      {typeof state.selected.Title != "undefined" ? <Details selected={state.selected}  close={close}/> :
     <header className="w-100 text-center text-white mt-5 ">
      <h2 className="Movietitle">Movie Search</h2> 
      {/* <Search handleInput={handleInput} SearchResult={SearchResult} SearchResults={SearchResults}/> */}
      <Search handleInput={handleInput} />
      {/* <Search handleInput={handleInput} SearchResult={SearchResult}/> */}

      {state.error && <p>{state.error}</p>}

      <div className="container">
        <div className="row">
            {
              state.results.map((result,i)=>(
                <div className="col-12 ps-4 pe-4 col-sm-6  col-md-4 col-lg-3 my-2">
                           <Result result={result} openDetail ={openDetail}/>
                </div>
              ))
            }
        </div>

      </div>
     </header>
}
    </div>
  );
}

export default App;