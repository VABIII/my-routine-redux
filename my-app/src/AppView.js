import React from "react";
import { Route, Routes }from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import Header from "./components/Header";
import Provider from "./modules/user";

function AppView() {




    return (

    <Provider>
        <div className="AppView">
            <Header/>
            <Routes>
                <Route path='/api/user/userLogin' element={<Login/>}/>
                <Route path='/' element={<Home/>}/>
            </Routes>




        </div>
    </Provider>
  );
}

export default AppView;
