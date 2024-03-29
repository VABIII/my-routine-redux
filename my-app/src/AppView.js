import React, { useEffect, useState, useContext } from "react";
import RoutineView from "./components/RoutineView";
import { Route, Routes }from 'react-router-dom';
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Push from "./components/Push";
import Pull from "./components/Pull";
import Legs from "./components/Legs";
import { useRoutine } from "./modules/user";

function AppView() {
    const r = useRoutine();

    const fetchUser = async (id) => {
        await r.getUserStrengthRoutines(id);
    }

    useEffect( () => {
         fetchUser(1);

    }, []);


    return (



            <div className="AppView">
                <Header/>
                <Routes>
                    <Route path='/api/user/push' element={<Push/> }/>
                    <Route path='/api/user/pull' element={<Pull/> }/>
                    <Route path='/api/user/legs' element={<Legs/> }/>
                    <Route path='/api/user/routine' element={<RoutineView/> }/>
                    <Route path='/api/user/userLogin' element={<Login/>}/>
                    <Route path='/' element={<Home/>}/>
                </Routes>




            </div>

  );
}

export default AppView;
