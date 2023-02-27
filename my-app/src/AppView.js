import React, { useEffect, useState, useContext } from "react";
import RoutineView from "./components/RoutineView";
import UserContext from "./contexts/UserContext";
import { Route, Routes }from 'react-router-dom';
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Push from "./components/Push";
import axios from "axios";

function AppView() {
    const [routine, setRoutine] = useState([]);

    useEffect( () => {
        const fetchUserRoutine = async id => {
            await axios.get(`http://localhost:5000/api/routine/${id}/1`)
                .then(res => setRoutine(res.data))
                .catch(e => console.error(e));
        };
        fetchUserRoutine(1);
    }, []);



    return (


        <div className="AppView">
            <UserContext.Provider value={routine}>
            <Header/>
            <Routes>
                <Route path='/api/user/push' element={<Push/> }/>
                <Route path='/api/user/routine' element={<RoutineView/> }/>
                <Route path='/api/user/userLogin' element={<Login/>}/>
                <Route path='/' element={<Home/>}/>
            </Routes>
            </UserContext.Provider>



        </div>

  );
}

export default AppView;
