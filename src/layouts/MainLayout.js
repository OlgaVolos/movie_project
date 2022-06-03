import React from 'react';
import {Header, LeftBar} from "../components";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <div style={{display: 'flex'}}>
                <LeftBar/>
                <Outlet/>
            </div>
        </div>
    );
};

export {MainLayout};
