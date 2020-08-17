import React from "react";
import photo from "../../assets/photo-cover.svg"
import ReactTooltip from "react-tooltip";
import './UserCard.scss'


const UserCard = ({users=[]}) => {

        return (<>

            {users.map((user, index) => {
                return <div  className="card" key={`${index}-${user.name}`}>
                    <ReactTooltip effect="solid" />
                    <div className="photo"><img src={user.photo ? user.photo : photo} alt=""/></div>
                    <div  className="name overflow" data-tip={user.name}>{user.name}</div>
                    <div className="email overflow"data-tip={user.email}>{user.email}</div>
                    <div className="phone overflow" data-tip={user.phone}>{user.phone}</div>
                    <div className="position overflow">{user.position}</div>
                </div>
            })}</>
    )
}
export default UserCard