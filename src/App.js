import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
    const [text, setText] = useState("");
    const [result, setResult] = useState({});

    const  handleSubmit = async () => {
        var formdata = new FormData();
        formdata.append("text", text);
        
        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        };
        
        const response = await fetch("https://flask-a3lvt46pya-nw.a.run.app/", requestOptions)    
        const data = await response.json();
        console.log(data.positive)
        setResult(data);
        
          
     };


  return (
    <div className="App">
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"30%",flexDirection:"column"}}>
        <p>Enter the text please !!</p>
    <input onChange={(e)=>{setText(e.target.value)}} ></input>
    <button  onClick={async()=> await handleSubmit()}>send</button>
    {result.length==0?(<></>):(<p>the positive :{result.positive} and negative : {result.negative} and netural:{result.netural}</p>)}
    </div>
    
    </div>
  );
}

export default App;
