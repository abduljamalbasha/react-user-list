
import React, { useEffect, useState } from 'react';
import { UserInfo } from '../modal/userModal';
import { Accordion } from 'react-bootstrap';
export const User: React.FC = () => {
    //State
    const [users, setUsers] = useState <UserInfo[]>();
    const [search, setSearch]: [string, (search: string) => void] = React.useState("");

    const handleChange = (e: { target: { value: string; }; }) => {
        setSearch(e.target.value);
      };

    //Fetch User Data from Dummy API
    const fetchUser = async () =>{
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        setUsers(await data.json())
    }
    useEffect(() =>{
        fetchUser()
    },[])

  return (    
        <div className='user-wrapper'>
            <h1>User List</h1>
            {/* Input Field for user search */}
            <input placeholder="Search User..." type="text" onChange={handleChange} className="search-user"></input>

            {/* Display userList in accordion */}
            <Accordion defaultActiveKey="0" className="accordion-wrapper">
            {users && users.map((user) => {
                    if (search == "" || user.name.toLowerCase().includes(search.toLowerCase())) {
                        return (
                            <Accordion.Item eventKey={`"${user?.id}"`}>
                            <Accordion.Header>{user.name}  <span className="title"> - @{user.username} </span></Accordion.Header>
                            <Accordion.Body className="accordion-body">
                            <div> <span className="title">Email: </span> {user.email}</div>
                            <div><span className="title">Phone:</span> {user.phone} </div>
                            <div><span className="title"> Website:</span> {user.website} </div>
                                
                            </Accordion.Body>
                        </Accordion.Item>
                        );
                    }
                    return null;
                }
            )}
            </Accordion>
        </div>
    
  );
}




export default User;
