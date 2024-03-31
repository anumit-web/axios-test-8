import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';

//  GET Requests in React Using Async/Await 


function AsyncAwaitExample() {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      setFetchedData(data);
    };
    getData();
  }, []);

  console.log("data: ", fetchedData);

  return (
    <div>
      <h1>test</h1>
      {fetchedData.data ? <h2>title: {fetchedData.data.title}</h2> : null}
    </div>
  );

}

function App() {

  return (
    <>
      <div>
        <h2>Hello from React!</h2>
        <AsyncAwaitExample />
      </div>
    </>
  )
}


export default App
