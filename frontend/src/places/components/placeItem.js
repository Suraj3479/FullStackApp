import React from "react";
import { useState } from "react";

import './placeItem.css';
import Card from "../../shared/components/UIElement/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElement/Modal";

const PlaceItem = props => {
    const [showMap,setShowMap] = useState(false);

    const openMapHandle = () => setShowMap(true);
    const closeMapHandle = () => setShowMap(false);


    return <React.Fragment>
    <Modal 
    show={showMap} 
    onCancle={closeMapHandle} 
    header={props.address} 
    contentClass="place-item__model-content"
    footerClass="place-item__modal-actions"
    footer={<Button onClick={closeMapHandle} >Close</Button>}
    >
    </Modal>

    <li className="place-item">
        <Card className="pleace-item__content">
            <div className="place-item__image">
                <img src={props.image} alt={props.title}  />
            </div>
            <div className="place-item__info">
                <h2>{props.title}</h2>
                <h3>{props.address}</h3>
                <p>{props.description}</p>
            </div>
            <div className="place-item__actions">
                <Button inverse>VIEW PLACE ON MAP</Button>
                <Button to={`/places/${props.id}`}>EDIT</Button>
                <Button danger>DELETE</Button>
            </div>
        </Card>
    </li>
    </React.Fragment>;
}

export default PlaceItem