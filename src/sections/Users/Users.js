import React, {useEffect, useState} from "react";

import "./Users.scss"

import {API} from "../../utils/API";
import {useDispatch, useSelector} from "react-redux";
import {refreshUsers, setNextUrl, setPrevUrl, setUsers, startLoading, stopLoading} from "../../redux/actions";
import {useMediaQuery} from "react-responsive/src";
import UserCard from "../../components/UserCard/UserCard";
import Button from "../../components/Button/Button";



const Users = () => {
    const init=[]
    const [allUsers,setAllUsers]=useState(init)
    const [totalPages,setTotalPages]=useState(null)
    const [currentPage,setCurrentPage]=useState(1)
    const sumUsers=(newItems)=>{
        setAllUsers(allUsers.concat(newItems))
    }
    const {users,next,loading,trigger}=useSelector(state=>state.app)
    const dispatch=useDispatch()
    const isMobile=useMediaQuery({query:'(max-width:767px)'})
    let usersCount=3
    if(!isMobile){
        usersCount=6;
    }
     const clearAllUsers=()=>{
        setAllUsers(init)
     }

    useEffect(()=>{
        dispatch(startLoading())
        API.getUsers(1,usersCount).then(data=>{
            if(data.success){
                clearAllUsers()
                dispatch(setUsers(data.users))
                dispatch(setNextUrl(data.links.next_url))
                dispatch(setPrevUrl(data.links.prev_url))
                setTotalPages(data.total_pages)
                setCurrentPage(data.page)
                dispatch(stopLoading())

            }
        }).catch(error=>{
            console.log(error)
        })
    },[usersCount,dispatch,trigger])


    useEffect(()=>{
        sumUsers(users)
    },[users])


    const showMore=()=>{
        dispatch(startLoading())
        API.sendRequest(next)
            .then(response=>{
                dispatch(setUsers(response.data.users))
                dispatch(setPrevUrl(response.data.links.prev_url))
                dispatch(setNextUrl(response.data.links.next_url))
                setCurrentPage(response.data.page)
                dispatch(stopLoading())
            }).catch(error=>{console.log(error)})
    }



    return (<div className="users__block" id="users">
        <div className="users__title"><h1>Our cheerful users</h1>
            <p>Attention! Sorting users by registration date</p></div>

        <div className="users">
            <UserCard  users={allUsers}/>
        </div>
        <div className="btn-position">
            {currentPage<totalPages-1?<Button disabled={loading} onClick={showMore}>Show more</Button>:null}</div>
    </div>)
}
export default Users