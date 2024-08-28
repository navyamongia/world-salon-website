import { useState } from "react";
import "../Styles/UsernamePasswordBoxStyle.css";

export default function UsernameBox({initialVal,setUsernameFunc}){
    // let [username, setUsername] = useState('');
  return<>
    <div className="outer-box username-box">
         Username
        <input type="text" name="username" className="input-box" onChange={(e) => setUsernameFunc(e.target.value)} value={initialVal}></input>
    
    </div>
  </>  
}