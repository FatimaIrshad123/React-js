import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

 
export function Assignment1() {
    const [input, setInput] = useState(0);
let expensiveValue = useMemo(() => {
    let expensiveValue = 1;    
    for (let i = 1; i <= input; i++){
        expensiveValue = expensiveValue * i        
    }
    return expensiveValue
},[input])
    

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}