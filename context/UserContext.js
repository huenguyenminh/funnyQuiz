import React, { useState, useEffect } from 'react';
// import { categories } from "./cate";
// import { questions } from "./questions";
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = React.createContext();

export const UserProvider = ({children}) => {
    const [userCurent, setUserCurent] = useState('');

    const [users, setUser] = useState([]);

    useEffect(() => {
        // async function getDataFromStore(){
        //     const u = await AsyncStorage.getItem('user');
            // setCurUser(u);
        // }
        (async () => {
            const u = await AsyncStorage.getItem('user');
            setUserCurent(u);
        })();
    }, []);

    const setCurUser = (userCur) => {
        AsyncStorage.setItem('user', userCur);
        setUserCurent(userCur);
    };

    const addUser = (userAdd) => {
        console.info(users, 'hello')
        const newUsers = [...users];
        newUsers.push({
            id:`${users.length + 1}`,
            name: userAdd
        })
        setUser(newUsers);
    };

    console.info(users,'usersusers')
    return (
        <UserContext.Provider value={{userCurent: userCurent, setCurUser, dataUser: users, addUser}}>
            {children}
        </UserContext.Provider>
    )
    
}
 
export default UserContext;