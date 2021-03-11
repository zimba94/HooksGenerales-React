import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });
    const {name, email} = formState;

    useEffect(()=>{
    }, []);

    useEffect(()=>{
    }, [formState]);
    useEffect(()=>{
    }, [email]);

    const handleInputChange = ({target})=>{
        setFormState({
            ...formState,
            [target.name] : target.value
        });
    };
    return (
        <>
            <h1>UseEffect</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    value={name}
                    onChange={handleInputChange}
                >

                </input>
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="tuemail@gmail.com"
                    value={email}
                    onChange={handleInputChange}
                >

                </input>
            </div>
            {(name === '123') && <Message />}
        </>
    );
}
