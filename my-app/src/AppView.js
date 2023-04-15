import React, { useEffect, useState, useContext } from "react";
import RoutineView from "./components/RoutineView";
import UserContext from "./contexts/UserContext";
import { Route, Routes }from 'react-router-dom';
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Push from "./components/Push";
import axios from "axios";
import Provider, { useRoutine } from "./modules/user";

function AppView() {
    const [ur, setUr] = useState([])
    const r = useRoutine();
    let {data} = r

    const getR = async id => {
        let res = await r.getUserRoutine(id);
        setUr(res)


    }

    useEffect(() => {
        getR(1)
    }, [])

    // const Routine = () => {
    //     const { routine } = useRoutineContext();
    //     return <span>{routine}</span>
    // }
    //
    // const Button = () => {
    //     const { routineSetter } = useRoutineContext();
    //     return <button onClick={routineSetter}>Set New Routine</button>
    //
    // }


    return (



            <div className="AppView">
                {console.log(ur)}
                <Header/>
                {/*<Routine/>*/}
                {/*<Button/>*/}
                <Routes>
                    <Route path='/api/user/push' element={<Push/> }/>
                    <Route path='/api/user/routine' element={<RoutineView/> }/>
                    <Route path='/api/user/userLogin' element={<Login/>}/>
                    <Route path='/' element={<Home/>}/>
                </Routes>




            </div>

  );
}

export default AppView;
