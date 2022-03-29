import React,{useEffect, useState} from 'react';
import { Carousel } from 'react-bootstrap';
import "../Home/Banner.css"
import Services from "../Services/Services"
import banner1 from "../../images/banner1.jpg"
import banner2 from "../../images/banner2.jpg"
import banner3 from "../../images/banner3.jpg"


const Home = () => {
    const [service, setService] = useState([]);
    useEffect(()=>{
        fetch('./services.json')
        .then(res=> res.json())
        .then(data => setService(data));
    }, [])
    const sliced = service.slice(0,4);
    console.log(sliced)
    return (
        <div>
       <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
         
        </div>
        <div className="carousel-inner w-100  mx-auto">
          <div className="carousel-item active">
            <img className="w-100 h-100" src={banner1} class="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            <h5 class="color">Gain Your Skills</h5>
              
              <button type="button" className="btn btn-danger">More</button>

            </div>
          </div>
          <div className="carousel-item ">
            <img className="w-100 h-100" src={banner2}  alt="..." />
            <div className="carousel-caption d-none d-md-block">
              
              
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100 h-75" src={banner3} class="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
             
              
            </div>
          </div>
          
        </div>
        <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden ">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
        <h2 className="p-5 pb-2"><span>Our Best</span> Courses</h2><hr className="w-50 shadow mx-auto"/>
        <div class="row row-cols-1 row-cols-md-4 g-4 mb-4 mt-2 w-100">
            
                {
                    sliced.map(services => <Services services={services}>
                        
                        
                    </Services>)
                }
            
        </div>
        </div>
    );
};

export default Home;