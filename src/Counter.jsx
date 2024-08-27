import { useState } from "react";

export default function Counter(){

    const [count, setCount] = useState(0);


    const handleAdd = (dynamic) =>{
        const newCount = count + dynamic;
        setCount (newCount);
    }

    const handleReduce = ()=> {
        const newCount = count -1;
        setCount (newCount);
    }
    return(
        <div style={{border: '2px solid purple'}}>
            <h3>Counter: {count}</h3>
            <button onClick={()=>handleAdd(1)}>Add 1</button>
            <button onClick={()=>handleAdd(2)}>Add 2</button>
            <button onClick={()=>handleAdd(3)}>Add 3</button>
            <button onClick={()=>handleAdd(4)}>Add 4</button>
            <button onClick={()=>handleAdd(5)}>Add 5</button>
            <button onClick={()=>handleAdd(6)}>Add 6</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    );

}