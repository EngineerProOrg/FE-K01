import { useState } from "react";
import FrameworkCard from "./FrameworkCard";

const UseState = () => {
    const [frameworks, setFrameworks] = useState([
        {
            id: 1,
            name: "React",
            type: "frontend",
        },
        {
            id: 2,
            name: "Angular",
            type: "frontend",
        },
        {
            id: 3,
            name: "Vue",
            type: "frontend",
        },
        {
            id: 4,
            name: "jQuery",
            type: "frontend",
        },
    ]);

    const [count, setCount] = useState(frameworks.length);
    const [newFrameworkId, setNewFrameworkId] = useState(0);
    const [newFrameworkName, setNewFrameworkName] = useState("");
    const [newFrameworkType, setNewFrameworkType] = useState("");

    const handleIdChange = (event) => {
        setNewFrameworkId(event.target.value);
    };

    const handleNameChange = (event) => {
        setNewFrameworkName(event.target.value);
    };

    const handleTypeChange = (event) => {
        setNewFrameworkType(event.target.value);
    };

    const handleButtonOnClick = (event) => {
        setFrameworks([
            ...frameworks,
            {
                id: newFrameworkId,
                name: newFrameworkName,
                type: newFrameworkType,
            },
        ]);
        setCount(count + 1);
    };

    return (
        <>
            <h2>Frontend frameworks:</h2>

            {frameworks.map((framework) => (
                <FrameworkCard
                    key={framework.id}
                    id={framework.id}
                    name={framework.name}
                    type={framework.type}
                />
            ))}

            <div>Frameworks Count: {count}</div>

            <h3>Input a new framework:</h3>

            <input
                onChange={handleIdChange}
                placeholder="framework id"
            />

            <input
                onChange={handleNameChange}
                placeholder="framework name"
            />

            <input
                onChange={handleTypeChange}
                placeholder="framework type"
            />

            <button onClick={handleButtonOnClick}>Submit</button>
        </>
    );
}

export default UseState;