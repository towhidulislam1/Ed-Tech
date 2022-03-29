import Button from '@restart/ui/esm/Button';
import React from 'react';
import { ButtonGroup, Card, Col, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';


const Services = (props) => {
    const {id, name, img, price, Description} = props.services;
    return (
        
        <div className="col mb-2 ">
            <div className="card shadow  h-100 mx-2">
                <img src={img} class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h3 className="card-title bg-secondary p-2 rounded">{name}</h3>
                    <h5><span>Price</span>:$ {price}</h5>
                    <p className="card-text text-start">{Description.substring(0, 50)}</p>
                    <Link to={`/detalis/${id}`}>
                    <button className="btn btn-danger px-4" >Buy</button>
                    </Link>
                   
                </div>
            </div>
        </div>
    );
};

export default Services;