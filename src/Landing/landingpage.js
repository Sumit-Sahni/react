import React from 'react'
import  './landing.css'
import styled from 'styled-components'
import logo from '../../src/logo.svg'


const MainBox = styled.div`
   color: black;
   height: 820px;
  
   font-family: 'Zen Antique', serif;
   `;
 const  Landingpage = () => {
      return(
        <MainBox  >
        <div className="fluid-container land-img" style={{border: '1px solid black'}}>
            <div className="container py-5 px-5">
               <div className="row">
                  <div className='col-lg-6 col-md-6 cl-12' style={{}} >
                      <div className="my-5">
                         <h1><span style={{color:"#89715b"}}>Hello!</span> I am Sumit Sahni,<br/>Interactive Developer based <br/> in India.</h1>
                      </div>
                      <div  style={{}}>
                        <p>See bits and pieces of  design work and prototyping on</p>
                         <ul>
                            <li  style={{color:"#f06"}}>Instagram</li>
                            <li className="mx-4"  style={{color:"#067"}}>Facebook</li>
                            <li style={{color:"#0cf"}}>Twitter</li>
                          </ul>
                  
                      </div>
                      <div className="my-3">
                            <h5>SERVICE</h5>
                           <h2>UI/UX Interactive, Mobile App & <br/>Video Animator</h2>
                      </div>
                  </div>
                  <div className=' cl-0 col-lg-6 col-md-6 img-container ' style={{  }}>
                  <img className="image-box" src={logo} alt="me" />
                  
                
                  </div>
                </div>
         
            </div>
            
        </div>
        </MainBox>
         
      )
  }

export default Landingpage;
