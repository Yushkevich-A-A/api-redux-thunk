import React from 'react';
import { Redirect } from 'react-router-dom';

function HomePage(props) {
    return (
        <div>
            <Redirect to='/serviсes'/>
        </div>
    )
}

HomePage.propTypes = {

};

export default HomePage;

