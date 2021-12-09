import React from "react";
import { useParams } from 'react-router-dom'

import PlaceList from "../components/placeLists";

const DUMMY_PLACES = [
    {
        id:"p1",
        title:"Royal Emperial Building",
        description:"Best sky scrapper in the world!",
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/250px-Empire_State_Building_%28aerial_view%29.jpg",
        address:"20 W 34th St, New York, NY 10001, United States",
        location:{
            lat:40.748598954862764,
            lng:-73.9856858522171
        },
        creator:"u1"
    },
    {
        id:"p2",
        title:"Empire State Building",
        description:"Best sky scrapper in the world!",
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/250px-Empire_State_Building_%28aerial_view%29.jpg",
        address:"20 W 34th St, New York, NY 10001, United States",
        location:{
            lat:40.748598954862764,
            lng:-73.9856858522171
        },
        creator:"u2"
    }
]


const UserPlaces = () =>{
    const userId = useParams().userId;
    const loadPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return <PlaceList items={loadPlaces} />
}

export default UserPlaces;