import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Home.css"
import Apiinfo from './NasaApiinfo';
import MovieApiinfo from './MovieApiInfo'
import { useDispatch } from 'react-redux';
import { apiAction } from '../store';
import {useSelector} from "react-redux"



const Home = () => {
    const showCard = useSelector(state => state.ui.isCardVisible)
    const showCard2 = useSelector(state => state.ui.isCardVisible2)

    
    const dispatch = useDispatch();
    const NasaApiinfoHandler = (e) =>{
      e.preventDefault();
        dispatch(apiAction.toggle())
        
    }

    const MovieApiinfoHandler = (e) =>{
        e.preventDefault();
        dispatch(apiAction.toggle2())
      }
    return (
        <div>
           
            <div className="fluid-container api-container py-5" >
            <h1 className="text-center"  style={{color: "black"}}>API's Projects</h1><hr  style={{color: "black",width: "30%", margin: "auto"}}/>
                <div className="container row-box py-5" >
                    <div className="row ">
                        <div className="col-lg-3 col-md-6 col-6 api-link-font  text-center"  >
                            {showCard && <Apiinfo />}
                            <NavLink to="/Nasaphoto" style={{color:"#fffff"}}>NASA API's</NavLink>
                            <div className="info-box">
                            <i onClick={NasaApiinfoHandler} class="bi bi-info-circle-fill" ></i>
                            </div>
                            
                        </div>

                        <div className="col-lg-3 col-md-6 col-6 api-link-font text-center" >
                        {showCard2 && <MovieApiinfo/>}
                            <NavLink to="/MovieApis" style={{color:"#fffff"}}>Movie API's</NavLink>
                            <div className="info-box">
                               <i class="bi bi-info-circle-fill" onClick={MovieApiinfoHandler}></i>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12 api-link-font text-center" >
                            <NavLink to="/" style={{color:"#fffff"}}>Yet to come</NavLink>
                            <div className="info-box">
                                <i  class="bi bi-info-circle-fill"></i>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 api-link-font  text-center" >
                            <NavLink to="/" style={{color:"#fffff"}}>Yet to come</NavLink>
                            <div className="info-box">
                                <i  class="bi bi-info-circle-fill"></i>
                            </div>
                        </div>
                    </div> 
            </div>
            </div>
          
        </div>
    )
}
 
export default Home;