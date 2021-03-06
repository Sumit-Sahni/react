import React from 'react'
import styled from 'styled-components'


const Footer = styled.div`
    height: auto; 
    background-color: #f9f9f9;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1010%26quot%3b)' fill='none'%3e%3cpath d='M1440 0L948.8 0L1440 158.17z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M948.8 0L1440 158.17L1440 325.15999999999997L563.66 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M563.6600000000001 0L1440 325.15999999999997L1440 353.53999999999996L281.0700000000001 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M281.07000000000016 0L1440 353.53999999999996L1440 404.55999999999995L181.58000000000015 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 560L60.09 560L0 319.28999999999996z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 319.28999999999996L60.09 560L612.1700000000001 560L0 303.95z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 303.95L612.1700000000001 560L878.0400000000001 560L0 277.21z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 277.21L878.0400000000001 560L1260.17 560L0 135.83999999999997z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1010'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-size:cover;
    padding-top:50px;
    @import url('https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap');
    font-family: 'Zen Kurenaido', sans-serif;
    font-weight:10px;
`


const Footercomp = () => {
    return (
        <Footer>
            <div className="container-fluid">
            <div className="container py-5 px-5">
                <div className="row ">
                    <div className="col-lg-12  d-flex flex-wrap flex-row justify-content-center">
                        <div><h6>INFORMATION</h6></div>
                        <div className="mx-3"><h6>ABOUT</h6></div>
                        <div className="mx-3"><h6>MORE</h6></div>
                        <div><h6>CONTACT</h6></div>
                    </div>
                    <div className="col-md-6 offset-md-3 py-2 px-2 my-2  d-flex flex-wrap flex-row justify-content-center">
                        <div className="mx-4">
                           <h6>NEWSLETTER</h6>
                        </div>
                        <input type="text"  placeholder="Email"/>
                    </div>
                    <div className="col-md-6 offset-md-3  my-2 d-flex flex-wrap flex-row justify-content-center">
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-twitter mx-3"></i>
                        <i class="bi bi-envelope"></i>

                    </div>
                </div>
              </div>
           </div>
         </Footer>
    )
}
 
export default Footercomp;