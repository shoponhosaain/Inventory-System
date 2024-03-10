import React from 'react';
import Header from './../Components/header/Header';
import Boiler from './../Components/layout/Boiler';
import DueList from './../Components/due/DueList';

const Dues = () => {
    return (
        <>
        <Header/>
        <Boiler>
            <DueList/>
        </Boiler>
        </>
    );
};

export default Dues;