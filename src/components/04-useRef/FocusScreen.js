import React, {useRef} from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();
    const handleClick = () => {
        // document.querySelector('input').select();
        inputRef.current.select();
    }
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            <input 
                className="form-control"
                placeholder="Su nombre"
                ref={inputRef}
            />

            <button 
                className="btn btn-outline-primary mt-5"
                onClick = {handleClick}
            >
                Focus
            </button>

        </div>
    )
}
