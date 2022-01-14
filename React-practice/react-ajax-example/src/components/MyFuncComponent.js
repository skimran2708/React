import React from "react";
import {useEffect, useState} from "react";

function MyFuncComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [persons, setPersons] = useState([]);
  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setPersons(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {persons.map(person =>
              <li key={person.id}>{person.name}</li>
            )}
        </ul>
      );
    }
}

export default MyFuncComponent;