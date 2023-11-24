import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
    const [posts, setPosts] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://us-central1-protean-theater-329521.cloudfunctions.net/project', {
           method: 'POST',
           body: JSON.stringify({
              "name": "Hamza",
           }),
           headers: {
              'Content-type': 'application/json; charset=UTF-8',
              "Access-Control-Allow-Origin" :"*"
           },
        })
           .then((res) => res.json())
           .then((post) => {
              console.log(post)
           })
           .catch((err) => {
              console.log(err.message);
           });
     };


  return (
    <div className="App">
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"30%",flexDirection:"column"}}>
        <p>Enter the text please !!</p>
    <input ></input>
    <button  onClick={handleSubmit}>send</button>
    </div>
    
    </div>
  );
}

export default App;
