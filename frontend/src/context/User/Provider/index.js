import React, { useState } from 'react';
import UserContext from '../Context';
import UserData from '../../../data/users.json';
import { get } from '../../../utils/Local Storage';

const UserProvider = ({ children }) => {

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ user, setUser ] = useState({});

    const login = async () => {
        // TODO: Replace with API Call

        let json = {
            success: false,
            message: "Not Found"
        };

        for(let user of UserData)
        {
            if(user.email === email)
            {
                json.message = "Invalid Credentials";
                if(user.password === password)
                {
                    json.message = "User Found!";
                    json.success = true;
                    break;
                }
            }
        }

        return json.success ? email : "";
    };

    const userDetails = () => {
        const temp = get("authToken");
        for(let x of UserData)
        {
            if(x.email === temp)
            {
                setUser(x);
            }
        }
    };

    return (
        <UserContext.Provider value={{ email, setEmail, password, setPassword, login, userDetails, user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider;
