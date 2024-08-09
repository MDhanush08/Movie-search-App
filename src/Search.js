import React from 'react';
import './App.css';


function Search({handleInput,SearchResult,SearchResults}) {
  return (
    <div className='search-input mt-3 mb-5'>
        {/* <input type='text' name='movie' className='w-50 p-2'
        placeholder='Search Movie..'  onChange={handleInput}
        onKeyDown={SearchResult} />  */}

<input type='text' name='movie' className='colorchange  p-2'
        placeholder='Search Movie..'  onChange={handleInput}
        onKeyDown={SearchResults}  />

        {/* <button  onClick={SearchResult} > */}
        {/* <button  > */}
       
        {/* </button> */}
    </div>
  )
}

export default Search