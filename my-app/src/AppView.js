import React from "react";
import { Route, Routes }from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import Header from "./components/Header";
import RoutineView from "./components/RoutineView";
import {RoutineContext} from "./modules/user";

function AppView() {




    return (


        <div className="AppView">
            <Header/>
            <Routes>
                <Route path='/api/user/routine' element={<RoutineView/> }/>
                <Route path='/api/user/userLogin' element={<Login/>}/>
                <Route path='/' element={<Home/>}/>
            </Routes>




        </div>

  );
}

export default AppView;
