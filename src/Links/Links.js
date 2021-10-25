import  "./Linkstyle.css"
import styled from "styled-components";
// import {Link,} from "react-router-dom";

const Links = () => {
  
  const StyleDev = styled.div`
    height: auto;
    display:flex;
    color: black;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='250' preserveAspectRatio='none' viewBox='0 0 1440 250'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1027%26quot%3b)' fill='none'%3e%3cpath d='M36 250L286 0L361 0L111 250z' fill='url(%23SvgjsLinearGradient1028)'%3e%3c/path%3e%3cpath d='M246.60000000000002 250L496.6 0L670.6 0L420.6 250z' fill='url(%23SvgjsLinearGradient1028)'%3e%3c/path%3e%3cpath d='M521.2 250L771.2 0L916.7 0L666.7 250z' fill='url(%23SvgjsLinearGradient1028)'%3e%3c/path%3e%3cpath d='M725.8000000000001 250L975.8000000000001 0L1056.8000000000002 0L806.8000000000001 250z' fill='url(%23SvgjsLinearGradient1028)'%3e%3c/path%3e%3cpath d='M1426 250L1176 0L1071 0L1321 250z' fill='url(%23SvgjsLinearGradient1029)'%3e%3c/path%3e%3cpath d='M1162.4 250L912.4000000000001 0L622.9000000000001 0L872.9000000000001 250z' fill='url(%23SvgjsLinearGradient1029)'%3e%3c/path%3e%3cpath d='M952.8 250L702.8 0L528.8 0L778.8 250z' fill='url(%23SvgjsLinearGradient1029)'%3e%3c/path%3e%3cpath d='M695.1999999999999 250L445.19999999999993 0L265.19999999999993 0L515.1999999999999 250z' fill='url(%23SvgjsLinearGradient1029)'%3e%3c/path%3e%3cpath d='M1297.499076660881 250L1440 107.49907666088103L1440 250z' fill='url(%23SvgjsLinearGradient1028)'%3e%3c/path%3e%3cpath d='M0 250L142.50092333911897 250L 0 107.49907666088103z' fill='url(%23SvgjsLinearGradient1029)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1027'%3e%3crect width='1440' height='250' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1028'%3e%3cstop stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1029'%3e%3cstop stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-size:cover;
    background-position-x: left;
`;

  return (
      <StyleDev>
        
          <div className="container" >
             <div className="row ">
          <div className="col-md-6 col-12 offset-md-3 text-center py-3" >
           <h1>Link's of my Projects</h1><hr  style={{color: "black",width: "30%", margin: "auto"}}/>
          </div>
            <div className="col-lg-12  d-flex flex-wrap flex-row justify-content-between link py-3">
     
              <div className="box-1 box"><a href="https://github.com/Sumit-Sahni">Git-hub<br/>&<br/>Profile</a></div>
              <div className="box-2 box"><a href="https://sumit-sahni.github.io/Banklist/">Banklist</a></div>
              <div className="box-3 box"><a href="https://sumit-sahni.github.io/portfolio/">Portfolio</a></div>
              <div className="box-4 box"><a href="https://sumit-sahni.github.io/portfolio/">Yet to Come</a></div>
              <div className="box-5 box"><a href="https://sumit-sahni.github.io/portfolio/">Yet to Come</a></div>
                 </div>
                </div>
             </div>
    
      </StyleDev>
    )
}

export default Links;