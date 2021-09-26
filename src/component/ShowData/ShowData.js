import React from 'react';
import './ShowData.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const ShowData = (props) => {

    const { name, salary, img, email, phone, company } = props.designer;
    const element = <FontAwesomeIcon icon={faUser} />

    return (
        <div className="data-card">
            <div>
                <div className="img-container">
                    <img src={img} alt="" />
                </div>
                <div className="data-container">
                    <h2>{name}</h2>
                    <h3>Salary: {salary}</h3>
                    <h3>Company: {company.name}</h3>
                    <h3> Email: {email}</h3>
                    <h3>Contact: {phone}</h3>
                    <button onClick={() => props.handleDesignerCart(props.designer)}

                        className="button"><span className="font-btn">{element} </span> Hire Me</button>


                </div>
            </div>

        </div>
    );
};

export default ShowData;

