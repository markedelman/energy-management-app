import React from 'react';
import Display from './display';
import UserInput from './userinput';

function Layout(){
    return (
        <div className="layout">
            <h2>First Component</h2>
            <UserInput />
            <hr/>
            <h2>Second Component</h2>
            <Display />
            <hr/>
        </div>
    )
};

export default Layout;