import React, {useState, useEffect}from 'react';
import ServiceContainer from '../ServiceContainer/ServiceContainer';
import './Home.css'
const Home = () => {
    const [services , setServices] = useState([]);

    useEffect(() => {
        fetch("fourService.json")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
       <div className="banner-image img-fluid">
           <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 mt-5 ">
            {services.map(service => <ServiceContainer key={service.id} service={service}></ServiceContainer>)}
        </div>
       </div>
       </div>
    );
};

export default Home;