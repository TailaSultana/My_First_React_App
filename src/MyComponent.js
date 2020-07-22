import React from 'react';
import './MyComponent.css';

function MyComponent({name, cno})
{
    return (<p className = "myStyleBold">This component is created by {name}. 
    This is component {cno+1} of 2</p>);

}

export default MyComponent;