import React, { useContext } from 'react';
import { UserContext } from '../09-useContext/UserContext';



export const HomeScreen = () => {

    const { user } = useContext(UserContext);

    return (
        <div>
            <h1>Home Screen</h1>
            <hr></hr>
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
        </div>
    )
}
