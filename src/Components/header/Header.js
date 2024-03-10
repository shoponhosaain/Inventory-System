import React from 'react';
import { Link } from 'react-router-dom';
const Header = ({active}) => {
    return (
        <>
        <header>
        <nav>
            <div class="buttons container my-4">
              <Link to={"/dashboard"} > <button  class={" button-nav me-2"} >Dashbaod</button></Link> 
              <Link to={"/workspace"} ><button class={" button-nav me-2"}>Workspace</button></Link> 
              <Link to={"/dues"} ><button class="button-nav me-2">Due List</button></Link> 
            </div>
        </nav>
    </header>
        </>
    );
};

export default Header;