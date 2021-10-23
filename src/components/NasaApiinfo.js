import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    color: black;
    width:auto;
    height:auto;
    /* border: 1px solid white; */
    transition: 1s;
`;
const Apiinfo = () => {
    return (
        <Container>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h3>About</h3>
                        <p className="fs-6">This Api changes everyday, it provides information about space including picture with description.</p>
                    </div>
                </div>
            </div>
         
        </Container>
    )
}

export default Apiinfo