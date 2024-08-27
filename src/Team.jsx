import { useState } from "react";

export default function Team (){

    const [team, setTeam] = useState(0);

    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam (newTeam);
    }

    const handleRemove = () => {
        const newTeam = team -1;
        setTeam (newTeam);
    }

    const teamStyle = {
        border: '2px solid red',
        margin: '20px',
        borderRadius: '20px',
        padding: '20px'

    }

    return(
        <div style={teamStyle}>
            <h3>Players: {team} </h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
}