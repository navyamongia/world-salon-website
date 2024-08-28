
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import LogoBar from "../components/LogoBar";
import Btn2 from "../components/Btn2";
import ContainerBox from "../components/ContainerBox";
import LoginSignUpBox from "../components/LoginSignupBox";
import UsernameBox from "../components/UsernameBox";
import PasswordBox from "../components/PasswordBox";
import SocialMediaBox from "../components/SocialMediaBox";
import WelcomeHeading from "../components/WelcomeHeading";
import ConfirmPasswordBox from "../components/ConfirmPasswordBox";


export default function SignUpPage(){
let[username, setUsername] =useState("");
let[password, setPassword] =useState("");
let[confirmPassword, setConfirmPassword] = useState('');
let [click, setClick] = useState(false)

function handleClick(){
    console.log('inside handle click signup')
    setClick(true)
    return <Btn2 bgColor='#006296'></Btn2>
}

function setUsernameFunc(data){
    setUsername(data);
    }
    
    function setPasswordFunc(data){
        setPassword(data);
    }
    function setConfirmPasswordFunc(data){
        setConfirmPassword(data);
    }
    let contentLogin=<>
    <UsernameBox setUsernameFunc ={setUsernameFunc} initialVal={username}></UsernameBox>
    <PasswordBox setPasswordFunc={setPasswordFunc} initialVal={password}></PasswordBox>
    <ConfirmPasswordBox setConfirmPasswordFunc={setConfirmPasswordFunc } initialVal={confirmPassword}></ConfirmPasswordBox>
    <p id="forgotText"><a href="#" style={{textDecoration: "none", color:"black" }}>Forgot Password</a></p>
    <div style={{marginTop:"24px"}}>
        {
            click == false ?  <Btn2  bgColor= ' #AFE3FF'content="Continue"  handleClick={handleClick} > </Btn2> : <Btn2 bgColor="#006296" content="Continue"  handleClick={handleClick}></Btn2>
        }
        {/* // <Btn2  bgColor= ' #AFE3FF'content="Continue"  handleClick={handleClick} > </Btn2> */}
    
         <p style={{marginTop:"47px", fontSize:"18px", height: "22px",  marginBottom:0}} >Or Signup using</p>
         <SocialMediaBox></SocialMediaBox>

        <hr style={{width: 491.01, textAlign:"center", marginTop:"82.5px", color: "black", opacity:"50%", marginLeft:"43px"}}></hr>
        <p style={{fontSize:"18px",  marginTop:"25px",marginBottom:"31px"}} ><Link to={"/Login"} style={{textDecoration:"none", color:"black"}}>Already a User?</Link></p>
        </div>
    </>
    let content =<>
    <WelcomeHeading content="Welcome!"></WelcomeHeading>
        <LoginSignUpBox content={contentLogin} >

        </LoginSignUpBox>
    </>

    
   
    return<>
    <LogoBar/>
    <ContainerBox content={content}/>
</>
    {/* <div className="ContainerBox"> */}
        
        {/* <div className="Box b1">
            <div id="Heading"><img src="src\imgs\logo.jpg" id="logoImg"></img> </div>
            <div id="Motto">Leaders and thinkers come together through AI-driven events to engage with luminaries across various fields, gaining cutting-edge insights and building a valuable network to <b>shape the future together</b> </div>
            <div id="Globe" ><img src="src\imgs\globe.svg" style={{margin:"0", overflow:"hidden"}}></img></div>
        </div> */}
        {/* <div className="Box b2">
            <div className="WelcomeHeading"><p>Welcome!</p></div>
            <div className="LoginSignUpBox">
                <div className="UsernameBox">
                    
                    Username
                    <input type="text" name="username" className="inputBox" required></input>

                </div>
                <div className="PasswordBox">
                    Password
                    <input name="password" className="inputBox" type="password" required></input>

                </div>
                <div className="ConfirmPasswordBox">
                   Confirm Password
                    <input name="confirmpassword" className="inputBox" type="password" required></input>

                </div>

             

                <div className="btnBox" style={{marginTop:"39px"}}>
                <Link to={"/PersonalPage"}><button className="btn">Continue</button></Link>
                </div>


                <p style={{marginTop:"47px", fontSize:"18px",marginLeft:"227px" , height: "22px", width:"137px"}} >Or signup using</p>
               
                <hr style={{width: 491.01, textAlign:"center", marginTop:"181px", color: "black", opacity:"50%"}}></hr>
                <p style={{fontSize:"18px",  marginTop:"25px",marginBottom:"0"}} ><Link to={"/Login"} style={{textDecoration:"none", color:"black"}}>Already a User?</Link></p>
                
            
            </div> */}
        {/* </div>

    </div> */}
   
   
}