import React from 'react'
import styled from "styled-components";
import search from "./search-icon.svg"
import MovieList from './MovieList';
import { useState } from 'react';
import axios from "axios"
import MovieInfoComponent from "./MovieInfoComponent"
import { NavLink } from "react-router-dom";


const Container = styled.div`
   display: flex;
   flex-direction: column;
`;
const Header = styled.div`
   display:flex;
   flex-direction: row;
   justify-content:space-between;
   background-color: black;
   color: #fff;
   padding: 10px;
   font-size:25px;
   font-weight: bold;
   box-shadow: 0 3px 6px 0 #555;
`;
const SearchBox = styled.div`
   display:flex;
   flex-direction: row;
   padding: 10px 10px 10px 10px;
   background-color: white;
   margin-left: 20px;
   border-radius:6px;
   width: 50%;
`;

const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`;

const SearchIcon = styled.img`
   width:32px;
   height:32px;
   color: black;
`;

const MovieListContainer = styled.div`
   display:flex;
   flex-direction: row;
   flex-wrap: wrap;
   padding:30px;
   justify-content: space-evenly;
   row-gap: 20px;
   background-color: #222;
   color: white;
   
`;
 const MovieComponents = () => {

    const [searchMovie, setSearchMovie] = useState("");
     const [timeOutId, updatetimeOutId] = useState("");
    const [movieList, updateMovieList] = useState([]);
    const [selectMovie, updateSelectedMovie] = useState("");

     const fetchData = async (searchString) => {
         const res = await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=21aa56d6`);
         console.log(res);
         updateMovieList(res.data.Search)
         
     };
    
     const movieHandle = (e) => {
        clearTimeout(timeOutId);
        e.preventDefault();
        setSearchMovie(e.target.value);
        const timeout = setTimeout(() => fetchData(e.target.value), 500)
        updatetimeOutId(timeout);
    }
    return (
        <Container>
          <Header>
              <NavLink to="/" style={{color: 'white'}}><h1>Back to HOME</h1></NavLink>
             <SearchBox>
                    <SearchIcon src={search} />
                    <SearchInput
                        type="text"
                        value={searchMovie}
                        onChange={movieHandle}
                   placeholder="Movie Search"
                    />
             </SearchBox>

          </Header>
          {selectMovie && <MovieInfoComponent selectedMovie={selectMovie}  onMovieselect={updateSelectedMovie}/>}
               <MovieListContainer>
                {movieList?.length ? movieList.map((movie,index) => (
                   <MovieList movie={movie} key={index} onMovieselect={updateSelectedMovie}/>)) : <h1>Movie API's</h1>}
                </MovieListContainer>
        </Container>
       
    )
}

export default MovieComponents;