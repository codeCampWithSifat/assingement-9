import React, { useEffect, useState } from 'react';
import SingleServiceComponent from '../SingleServiceComponent/SingleServiceComponent';

const SingleService = () => {
    const [singleService, setSingleService] = useState([]);
    useEffect(() => {
        fetch("singleService.json")
        .then(res => res.json())
        .then(data => setSingleService(data))
    },[])
    return (
        <div className='row'>
            {
                singleService.map(single => <SingleServiceComponent key={single.id} single={single}></SingleServiceComponent>)
            }
        </div>
    );
};

export default SingleService;