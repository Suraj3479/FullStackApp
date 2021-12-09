import React from "react";

import './placeLists.css';
import Card from '../../shared/components/UIElement/Card';
import PlaceItem from "./placeItem";

const PlaceList = props => {
    if(props.items.length === 0){
        return <div className="placeList center">
            <Card>
                <h2>No place found. May be create one.</h2>
                <button>Share Places</button>
            </Card>
        </div>
    }

    return <ul className="place-list">
            {props.items.map(place => 
            <PlaceItem 
                key={ place.id } 
                id={ place.id } 
                image={ place.imageUrl } 
                title={ place.title } 
                description={ place.description } 
                address={ place.address } 
                creatorId={place.creator} 
                coordinates={ place.location }  
            />)}
    </ul>;
}

export default PlaceList