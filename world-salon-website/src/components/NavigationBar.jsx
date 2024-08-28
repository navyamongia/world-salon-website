      
import Home from "../logos/Home";
import Chat from "../logos/Chat";
import Search from "../logos/Search";
import Community from "../logos/Community";
import { Link } from "react-router-dom";
import PermIdentityLogo from "../logos/PermIdentityLogo";
import { Navbar, NavbarBrand, Nav , Form, Row, Col, Button} from "react-bootstrap";
import './NavBarStyles.css';
import { useState } from "react";

export default function NavigationBar(){
 let[activeArr, setActiveArr] = useState([false, false, false, false]);
 let Arr=[];
 function handleClick(index){
    for(let i =0; i<4;i++){
        if(index == i){
            Arr[index] = true;
        }
        else{
            Arr[i] = false;

        }
    }

    setActiveArr(Arr);

 }
 

 
  
return(

    <Navbar style={{height:"80px", width:"1440px", padding:"0", alignItems:'flex-start'}} >
        <div style={{marginTop:"24px", marginLeft:"59px", height:"37px" ,width:"241px" }}>
        <img src ="src\imgs\logo.jpg" height="100%" width="100%" ></img>
        </div>

        <Nav style={{height:"45px", width:"651px", marginLeft:"384px", marginTop:"16px"}} id="Nav1" className="justify-content-between" >
            <Nav.Link as ={Link} to = {"/CommunityPage" } onClick={()=>handleClick(0)} >
            {
                activeArr[0] == true ? <Home currColor = "#0070AC" /> : <Home currColor = "black" />
            }
               
            </Nav.Link>

            <Nav.Link as ={Link} to = {"/EventsPage"} onClick={()=>handleClick(1)}>
            {
                activeArr[1] == true ? <Community currColor = "#0070AC" /> : <Community currColor = "black" />
            }
                
               
            </Nav.Link>

            <Nav.Link as ={Link} to ="#"  onClick={()=>handleClick(2)}>
            {
                activeArr[2] == true ? <Chat currColor = "#0070AC" /> : <Chat currColor = "black" />
            }
                {/* <Chat currColor ="black"  /> */}
            </Nav.Link>

            <Nav.Link as ={Link} to ="#"  onClick={()=>handleClick(3)}>
            {
                activeArr[3] == true ? <PermIdentityLogo currColor = "#0070AC" /> : <PermIdentityLogo currColor = "black" />
            }
                
            </Nav.Link>

            <div id="lineBreak">

            </div>
            <div id="NavForm">
            <input type="text" placeholder="Search about anything (events)"></input>
            <button ><Search/></button>
            
            </div>
            

        </Nav>

        
        


        
    </Navbar>    

   
  
)
}

    