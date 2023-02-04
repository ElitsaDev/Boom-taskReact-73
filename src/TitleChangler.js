import { useState, useEffect } from "react";

export default function TitleChangler(){
    const [ counter, setCounter ] = useState(1);

    const handleClick = (() => {
        setCounter((counter) => counter + 1);
    });

    useEffect(() => {
        document.title = `Count: (${counter})`;       
    },[counter]);
    
    
    return (
        <div>
            <button onClick={handleClick}>Count ({counter})</button>
        </div>
    );
}