import React from 'react';
import { Link } from 'react-router-dom';

const HomeComponent = () => {
    return (
        <p className="welcome">
            Welcome to Currency Convertor app
            <br></br>
        <Link className="navbar-brand" to={'/login'}>Login</Link>
        <Link className="navbar-brand" to={'/register'}>Register</Link>

</p>
    

    );
}

export default HomeComponent;
