import LogoBar from "../components/LogoBar";
import ContainerBox from "../components/ContainerBox";
import Btn1 from "../components/Btn1";
import Btn3 from "../components/Btn3";
import LoginPage from "./LoginPage";
import { Link } from "react-router-dom";
export default function WelcomePage(){
    let content = <>
    <div style={{fontSize:"32px", fontWeight:'bold', lineHeight:'120%', textAlign:"center", marginLeft:'36px', marginTop:"262px"}}>Build a valuable network to shape the future together!</div>
    <div style={{marginTop:'50px', width:"fit-content", marginLeft:"74px"}}>
        <Link to={'/SignUp'}><Btn1  content="Get Started" > </Btn1></Link>
    </div>

    <div style={{marginTop:"50px", width:"fit-content", marginLeft:"74px"}}>
   <Link to={"/Login"}><Btn3 content="I Already have an Account" ></Btn3></Link>
    </div>

    <div style={{width:'495px', height:"1px", backgroundColor:"#B5B3B3", marginTop:"73.5px", marginLeft:"74px"}}>

    </div>

    <div style={{fontSize:'18px', width:"fit-content", marginLeft:"263px", marginTop:"28px"}}>
        Browse as a Guest
    </div>
   
        
    
    
    
    </>;
    return <>
    <LogoBar/>
    <ContainerBox  content = {content}/>

    </>
}