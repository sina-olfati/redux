import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import {fetchUsers} from "../redux/users/usersAction"
import { fetchUsers } from '../redux/users/usersAction'

const Users = () => {

    const dispatch = useDispatch()
    const userData = useSelector(state => state.userState)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

  return (
    <div style={{border: "dotted"}}>
        <h1>Users</h1>
        <h2>Async actions http</h2>
      {
        userData.loading ? 
        <h2>loading...</h2> :
        userData.error ?
        <h3>{userData.error}</h3> :
        userData.users.map(user => <p key={user.id}>{user.name}</p>)
      }
    </div>
  )
}

export default Users
