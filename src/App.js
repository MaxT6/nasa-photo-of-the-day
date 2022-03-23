import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Header from './components/Header';
import Image from './components/Image';

function App() {
  const [arrayObj, setArrayObj] = useState([])

useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(res => {
    //console.log(res) <-- Don't forget to console log the res 
    setArrayObj(res.data);
})
  .catch(err => console.error(err))
},[])

console.log(arrayObj)
  return (
    <div className="App">
       <header>
      { <h1>{arrayObj && <Header headerTitle={arrayObj} headerDate={arrayObj}/>} </h1> /* remember to watch the flow */}
    </header>
    {arrayObj && <Image bodyImage={arrayObj} exp={arrayObj} />}
    {/* <p>
      Read through the instructions in the README.md file to build your NASA
      app! Have fun <span role="img" aria-label='go!'>🚀</span>!
    </p> */}
    </div>
  );
}

export default App;
