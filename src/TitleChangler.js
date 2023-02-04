import { useState, useEffect } from "react";

export default function TitleChangler(){
    const [ counter, setCounter ] = useState(1);
    const [ counterEffect, setCounterEff ] = useState(1);

    const handleClick = (() => {
        setCounter((counter) => counter + 1);
    });

    useEffect(() => {
        setCounterEff((counterEffect) => counterEffect = counter);
    },[counter]);
    
    
    return (
        <div>
            <h1>Count ({counterEffect})</h1>
            <button onClick={handleClick}>Count ({counter})</button>
        </div>
    );
}