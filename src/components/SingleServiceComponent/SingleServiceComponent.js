import React from 'react';

const SingleServiceComponent = (props) => {
    console.log(props.single);
    const {img,name, capacity,service} = props.single
    return (
        <div className="col-sm-12">
    <div className="card">
      <div className="card-body">
      <img src={img} className="img-fluid" alt="..."/>
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{capacity}</p>
        <p className="card-text">{service}</p>
       <p>Go AnyWhere</p>
      </div>
    </div>
  </div>
    );
};

export default SingleServiceComponent;