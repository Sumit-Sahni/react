import React from 'react'
import {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import "./Nasaphoto.css"


const Nasaphoto = () => {

    const [photoData, setPhotoData] = useState(null)
   
    useEffect(() => {
        async function fetchPhoto() {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=mQCaciZk3xYoN2hVupBVEkaMt7F5QjyUFHZZdURb`);
            const  data  = await res.json();
            console.log(data);
            setPhotoData(data);
        }
        
        fetchPhoto()
    }, []);
    
    if(!photoData) return <div/>
    return (
    <div className="fluid-container main-container">
           
            <div className="container">

            <div className="row text-center ">
                 <NavLink to="/" className=" text-black fs-1 my-5">Back To Home</NavLink>
          </div>
               <div className="row py-3">
             
              <div className="col-lg-6 col-md-12 d-flex align-items-center ">
                    
              {photoData.media_type === "image" ? (
                <img src={photoData.url} alt={photoData.title} className="Image" />
              ) : (
                    <iframe
                        title="Space-video"
                        src={photoData.url}
                        frameborder="0"
                        allow="autoplay"
                        allowFullScreen
                        className="photo"
                    
                    />
               )}
              
              </div>

              <div className="col-lg-6 col-md-12 col-12">
                  <div className="About-pic px-3 py-3" >
                      <h1>{photoData.title}</h1>
                      <p>{photoData.date}</p>
                      <p>{ photoData.explanation}</p>
                  </div>
              </div>
            </div>
 
           
        
        </div>
        </div>
       
           
    )
}
 
export default Nasaphoto;



