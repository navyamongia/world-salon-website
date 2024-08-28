import { Link } from "react-router-dom";
import React, { useState } from 'react';
import LogoBar from "../components/LogoBar";
import ContainerBox from "../components/ContainerBox";
import WelcomeHeading from "../components/WelcomeHeading";
import LoginSignUpBox from "../components/LoginSignupBox";
import UsernameBox from "../components/UsernameBox";
import Btn1 from "../components/Btn1";
import SocialMediaBox from "../components/SocialMediaBox";
import PasswordBox from "../components/PasswordBox";

function LoginPage(){
let[username, setUsername] =useState("");
let[password, setPassword] =useState("");


    
function handleClick(){
   fetch('https://akyqbdl805.execute-api.us-east-1.amazonaws.com/v1/auth/login', {
    method: "POST",
    headers:{
       "Content-Type" : "application/json" ,
      
       
       
    },
    // credentials: "include",
     body:JSON.stringify({
        username : `${username}`,
        password: password
     })
   }).then(res=>{
    if(res.status==200){
        console.log(res.status)
        console.log(res.headers.getSetCookie())
    }
   })
}
    

function setUsernameFunc(data){
setUsername(data);
}

function setPasswordFunc(data){
    setPassword(data);
}


let contentLogin = <>
    <UsernameBox setUsernameFunc ={setUsernameFunc} initialVal={username}></UsernameBox>
    <PasswordBox setPasswordFunc={setPasswordFunc} initialVal={password}></PasswordBox>
    <p id="forgotText"><a href="#" style={{textDecoration: "none", color:"black" }}>Forgot Password</a></p>
    <div style={{marginTop:"24px"}}>
        <Btn1  content="Login"  onClick={handleClick}> </Btn1>
 
         <p style={{marginTop:"47px", fontSize:"18px",marginLeft:"227px" , height: "22px", width:"121px", marginBottom:0}} >Or login using</p>
         <SocialMediaBox></SocialMediaBox>

        <hr style={{width: 491.01, textAlign:"center", marginTop:"199px", color: "black", opacity:"50%", marginLeft:"43px"}}></hr>
        <p style={{fontSize:"18px",  marginTop:"25px",marginBottom:"31px"}} ><Link to={"/SignUp"} style={{textDecoration:"none", color:"black"}}>New User?</Link></p>
        </div>

</>

let content =<>
    <WelcomeHeading content="Welcome Back!"></WelcomeHeading>
        <LoginSignUpBox content={contentLogin} >

        </LoginSignUpBox>

</>


return <>
<LogoBar/>
<ContainerBox content={content}/>
</>
}

export default LoginPage;