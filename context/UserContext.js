import React, { useState } from 'react';
// import { categories } from "./cate";
// import { questions } from "./questions";

const UserContext = React.createContext();

export const UserProvider = ({children}) => {
    const [userCurent, setUserCurent] = useState('');

    const [users, setUser] = useState([]);

    
    const setCurUser = (userCur) => {
        setUserCurent(userCur);
    };

    const addUser = (userAdd) => {
        setUser([...users, {id:`${users.length + 1}`,name: userAdd}]);
    };

    return (
        <UserContext.Provider value={{userCurent: userCurent, setCurUser, dataUser: users, addUser}}>
            {children}
        </UserContext.Provider>
    )
    
}
 
export default UserContext;