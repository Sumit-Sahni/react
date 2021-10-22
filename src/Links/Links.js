import  "./Linkstyle.css"
import styled from "styled-components";
// import {Link,} from "react-router-dom";

const Links = () => {
  
  const StyleDev = styled.div`
    height: 600px;
    display:flex;
    background-color: black;
    color: white;
`;

  return (
      <StyleDev>
        
          <div className="container" >
        <div className="row ">
          <div className="col-md-6 col-12 offset-md-3 text-center py-2" >
           <h1>Link's of my Projects</h1><hr  style={{color: "white",width: "30%", margin: "auto"}}/>
          </div>
            <div className="col-lg-12  d-flex flex-wrap flex-row justify-content-between link py-3">
     
              <div className="box-1 box"><a href="https://github.com/Sumit-Sahni">Git-hub<br/>&<br/>Profile</a></div>
              <div className="box-2 box"><a href="https://sumit-sahni.github.io/Banklist/">Banklist</a></div>
              <div className="box-3 box"><a href="https://sumit-sahni.github.io/portfolio/">Portfolio</a></div>
              <div className="box-4 box"><a href="">Yet to Come</a></div>
              <div className="box-5 box"><a href="">Yet to Come</a></div>
                 </div>
                </div>
             </div>
    
      </StyleDev>
    )
}

export default Links;