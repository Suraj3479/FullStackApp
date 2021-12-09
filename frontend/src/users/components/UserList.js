import React from "react";

import "./UserList.css";
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElement/Card";

const UserList = props =>{
    if(props.item.length===0){
        return(
        <div className="center">
        <Card>
            <h2>No users Found</h2>
        </Card>
        </div>
        );
    }
    return (
        <ul className="user-list">
            {props.item.map(user=>{
                return (<UserItem 
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        image={user.image}
                        placeCount={user.place}
                        />)
            })}
        </ul>
    );
}

export default UserList;