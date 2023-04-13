//Layour component for wrapping other components

import React from 'react';
import Map from '../Map';

const Layout = () => {
    return (
        <div id='layout-container'>
            <Map />           
        </div>
    );
}

export default Layout;