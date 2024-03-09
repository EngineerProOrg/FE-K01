import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import FrameworkCard from "./FrameworkCard";

const App = () => {
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

    const [users, setUsers] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        const usersResponse = await axios.get("https://jsonplaceholder.typicode.com/users");
        const usersData = usersResponse.data;
        setUsers(usersData);
      }
      fetchData();
    }, [])

    const handleInputIdOnChange = (event) => {
        setNewFrameworkId(event.target.value);
    };

    const handleInputNameOnChange = (event) => {
        setNewFrameworkName(event.target.value);
    };

    const handleInputTypeOnChange = (event) => {
        setNewFrameworkType(event.target.value);
    };

    const handleButtonOnClick = (event) => {
        // add new framework to the framework list
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
                onChange={handleInputIdOnChange}
                placeholder="framework id"
            />

            <input
                onChange={handleInputNameOnChange}
                placeholder="framework name"
            />

            <input
                onChange={handleInputTypeOnChange}
                placeholder="framework type"
            />

            <button onClick={handleButtonOnClick}>Submit</button>

            {users.map(user => <div>{user.name}</div>)}
        </>
    );
};

export default App;
