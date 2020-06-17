import React, {useState} from 'react';
import './Room.css';

function Room() {

    //const state = useState(true);
    //console.log("State = ",state);
    const [isLit, setLit] = useState(!true);
    let [age, setAge] = useState(23);
    let [temp, setTemp] = useState(22);
   // const [OnLit, setOnLit] = useState(false);
   // const [OffLit, setOffLit] = useState(true);
    //let hello = 'Hello' + isLit + 'World';
    //let hello = 'Hello ${isLit} World';
        //function updateLit() {
       // console.log("Button Clicked");
        //setLit(!isLit);
   // }

  return (
    <div className={"room "+(isLit? "lit": "dark")}>
      This Room is {isLit? "lit": "dark"}
      <br/>
      <button onClick={()=> setLit(true)}>Light ON</button>
      <br/>
      <button onClick={()=> setLit(!true)}>Light OFF</button>
      <br/>
      Age : {age}
      <br/>
      <button onClick={()=> {
        console.log("increaseAge Button Clicked");
        setAge(++age);
    }}>
        Increment Age</button>
        <br/>
      Tempereture : {temp} °C
      <br/>
      <button onClick={()=> {
          console.log("increaseTemp Button Clicked");
          setTemp(++temp);
      }}>
        Temp +</button>
        <br/>
        <button onClick={()=> {
          console.log("DecreaseTemp Button Clicked");
          setTemp(--temp);
      }}>
        Temp -</button>
      <br/> 
     
    </div>
  );
    
    }
export default Room;

    
