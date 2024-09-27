import { useState, useEffect } from "react";
import * as petService from './services/petService'

const App = () => {
  const [petList, setPetList] = useState([]);

  // Create a new useEffect
  useEffect(() => {
    // create a new async function
    const fetchPets = async () => {
      // call on the index function
      const pets = await petService.index();
      // Set petList state to the returned pets data
      setPetList(pets);
    };
    // invoke the function
    fetchPets();
    // add an empty dependency array to the `useEffect` hook.
  }, []);

  return <h1>Hello world!</h1>;
};

export default App;
