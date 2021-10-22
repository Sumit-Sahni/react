import React from 'react'
import styled from "styled-components"

const Container = styled.div`
   display:flex;
   flex-direction: column;
   padding: 10px;
   box-shadow: 0px 1px 3px -1px teal;
   width:280px;
   cursor: pointer;
   gap:5px;
  
   
   
`;

const CoverImage = styled.img`
  width:auto;
  height:344px; 
  object-fit: cover;
`;
const Moviename = styled.span`
 font-size: 18px;
 font-weight: 600;
 color: #ffff;
 margin: 10px 0;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
`;
const InfoColumn = styled.div`
display: flex;
flex-direction: row;
justify-content:space-between;

`;

const MovieInfo = styled.span`
 font-size: 16px;
 font-weight: 500;
 color: #ffff;
 text-transform: capitalize;
`;


export default function MovieList(props) {
    const { Title, Year, imdbID, Type, Poster } = props.movie;
    
    const OnClickHandle = () => {
        props.onMovieselect(imdbID);
    }
    return (
        <div>
            <Container onClick={OnClickHandle} className="icon">
                <CoverImage src={ Poster}></CoverImage>
                <Moviename>{ Title}</Moviename>
                <InfoColumn>
                    <MovieInfo>Year: { Year}</MovieInfo>
                    <MovieInfo>Type: { Type}</MovieInfo>
                </InfoColumn>
            </Container>
           
        </div>
    )
}

