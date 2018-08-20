import React from 'react';


const MyComponent=({connected,dispatchUpdate})=>{
    console.log(connected)
    return(<div>
        <h1>my component is connected:{connected}</h1>
        <button onClick={dispatchUpdate}>check</button>
    </div>);
}

export default MyComponent;


