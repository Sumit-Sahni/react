import React from 'react'
import  './landing.css'
import styled from 'styled-components'
import logo from '../../src/logo.svg'


const MainBox = styled.div`
  /* background-color: #ffff; */
   color: black;
   height: 820px;
   background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='250' preserveAspectRatio='none' viewBox='0 0 1440 250'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1003%26quot%3b)' fill='none'%3e%3cpath d='M26 250L276 0L624 0L374 250z' fill='url(%23SvgjsLinearGradient1004)'%3e%3c/path%3e%3cpath d='M264.6 250L514.6 0L648.1 0L398.1 250z' fill='url(%23SvgjsLinearGradient1004)'%3e%3c/path%3e%3cpath d='M510.20000000000005 250L760.2 0L976.2 0L726.2 250z' fill='url(%23SvgjsLinearGradient1004)'%3e%3c/path%3e%3cpath d='M760.8000000000001 250L1010.8000000000001 0L1298.8000000000002 0L1048.8000000000002 250z' fill='url(%23SvgjsLinearGradient1004)'%3e%3c/path%3e%3cpath d='M1439 250L1189 0L931 0L1181 250z' fill='url(%23SvgjsLinearGradient1005)'%3e%3c/path%3e%3cpath d='M1167.4 250L917.4000000000001 0L852.9000000000001 0L1102.9 250z' fill='url(%23SvgjsLinearGradient1005)'%3e%3c/path%3e%3cpath d='M952.8 250L702.8 0L528.8 0L778.8 250z' fill='url(%23SvgjsLinearGradient1005)'%3e%3c/path%3e%3cpath d='M688.1999999999999 250L438.19999999999993 0L153.19999999999993 0L403.19999999999993 250z' fill='url(%23SvgjsLinearGradient1005)'%3e%3c/path%3e%3cpath d='M1195.060860040578 250L1440 5.060860040578092L1440 250z' fill='url(%23SvgjsLinearGradient1004)'%3e%3c/path%3e%3cpath d='M0 250L244.9391399594219 250L 0 5.060860040578092z' fill='url(%23SvgjsLinearGradient1005)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1003'%3e%3crect width='1440' height='250' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1004'%3e%3cstop stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1005'%3e%3cstop stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
   background-repeat: no-repeat;
   background-size:cover;
   font-family: 'Zen Antique', serif;
   `;
 const  Landingpage = () => {
      return(
        <MainBox  >
        <div className="fluid-container py-5 px-5 ">
            <div className="container">
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
