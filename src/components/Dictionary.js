import { useState, useEffect } from "react";
export default function Dictionary(){
    
    const [word, setWord] = useState('');
    const [word2, setWord2] = useState('');

    useEffect(()=>{
        console.log('State Updated ' + word);
    },[word])

    useEffect(()=>{
        console.log('State Updated ' + word2);
    },[word2])
    // limit what state useEffect cares about--> dependency array
    // no dependency array--> update for any change state
    // empty dependency array--> execute once
    // passing in data--> only execute when those states are changed

    return(
        <>
            <input 
                type="text"
                onChange={(e)=>{
                setWord(e.target.value);

            }} 

            />
            <h1>Let's get the definition for {word}</h1>
            <input 
                type="text"
                onChange={(e)=>{
                setWord2(e.target.value);

            }} 

            />
            <h2>Let's get the definition for {word2}</h2>
        </>
    )
}