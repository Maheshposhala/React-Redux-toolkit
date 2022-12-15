import { useEffect } from "react";
import { useSelector, useDispatch} from 'react-redux';
import { fetchUsers } from "./userSlice";
const UserView = ()=> {
  const dispatch = useDispatch();
  const user= useSelector((store)=> store.user)
  console.log(user)
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
    return(
        <div>
            <h2>List of Users</h2>
            {
                user.loading && <div>Loading...</div>
            }
            {
                !user.loading && user.error ? <div>{user.error}</div>: null
            }
            {
                !user.loading && user.users && user.users.map((userdata)=>{
                    return (<div key={userdata.id}>{userdata.name}</div>)
                })
            }
        </div>
    )
}
export default UserView;