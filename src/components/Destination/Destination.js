import React from 'react';
import MapDirection from '../MapDirection/MapDirection';
import SingleService from '../SingleService/SingleService';

const Destination = () => {
    return (
        <div className='container'>
           <div className="row">
               <div className="col-md-4">
                    <SingleService/>
               </div>
               <div className="col-md-8">
                   <MapDirection/>
               </div>
           </div>
        </div>
    );
};

export default Destination;