import React from "react";
import photo from "../../assets/photo-cover.svg"
import './UserCard.scss'
import Tooltip from "./../Tooltip/Tooltip"



const UserCard = ({users=[]}) => {
        return (<>
            {users.map((user, index) => {
                return <div  className="card" key={`${index}-${user.name}`}>
                    <div className="photo"><img src={user.photo ? user.photo : photo} alt=""/></div>
                    <Tooltip><div className="name overflow" content={user.name}>{user.name}</div></Tooltip>
                    <div className="position overflow">{user.position}</div>
                    <Tooltip><div className="email overflow" content={user.email}>{user.email}</div></Tooltip>
                    <div className="phone overflow" content={user.phone}>{user.phone}</div>

                </div>
            })}</>
    )
}
export default UserCard