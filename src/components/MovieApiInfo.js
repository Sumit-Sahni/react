import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    color: black;
    width:auto;
    height:auto;
    /* border: 0.1px solid white; */
    transition: 1s;
`;
const MovieApiinfo = () => {
    return (
        <Container>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h3>About</h3>
                        <p className="fs-6">It is a simple Movie search Api where you can serach about any Movie and their Information</p>
                    </div>
                </div>
            </div>
         
        </Container>
    )
}

export default MovieApiinfo