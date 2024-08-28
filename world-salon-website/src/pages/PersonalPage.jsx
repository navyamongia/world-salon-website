import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
export default  function PersonalPage(){
   
    let[name, setName] =useState("");
let[email, setEmail] =useState("");
let[school, setSchool] =useState("(select one option)");
let[career, setCareer] =useState("(select one option)");
return<>

<div className="ContainerBox">
        
        <div className="Box b1">
            <div id="Heading"><img src="src\imgs\logo.jpg" id="logoImg"></img> </div>
            <div id="Motto">Leaders and thinkers come together through AI-driven events to engage with luminaries across various fields, gaining cutting-edge insights and building a valuable network to <b>shape the future together</b> </div>
            <div id="Globe" ><img src="src\imgs\globe.svg" style={{margin:"0", overflow:"hidden"}}></img></div>
        </div>
        <div className="Box b2">
            <div className="WelcomeHeading"><p>Welcome!</p></div>
            <div className="PersonalInfoBox">
                <div className="NameBox">
                    {/* <label>Username</label> */}
                    Name
                    <input type="text" name="name" className="inputBox" value={name} onChange={e => setName(e.target.value)}></input>

                </div>
                <div className="EmailBox">
                    Email
                    <input name="email" className="inputBox" type="text" value={email} onChange={e => setEmail(e.target.value)}></input>

                </div>
                <div className="SchoolBox" >
                  School
                    {/* <input name="school" className="inputBox" type="dropdown"></input> */}
                    <select className="inputBox" name="school"  onChange={e => setSchool(e.target.value)} value={school} style={school =="(select one option)" ? {color:"#9F9C9C"} :{}}>
                        <option disabled hidden >(select one option)</option>
                        <option value= "UW Madison" > UW-Madison</option>
             
                    </select>

                </div>

                <div className="CareerBox" >
                  Career
                   
                    <select className="inputBox" name="career"   onChange={e=>setCareer(e.target.value)} value={career} style={career == "(select one option)" ? {color:"#9F9C9C"} :{}}>
                        <option disabled hidden >(select one option)</option>
                        <option value= "student"> Student </option>

                    </select>

                </div>

                <div className="btnBox" style={{marginTop:"39px"}}>
                {/* <Link to={"/PersonalPageConti"}><button className="btn" disabled ={name =="" || email =="" || school=="(select one option)" || career =="(select one option)" ? true : false } style={name =="" || email =="" || school=="(select one option)" || career =="(select one option)" ? {backgroundColor: "#AFE3FF"} : {}}>Continue</button></Link> */}
                {/* <Link to={"/PersonalPageConti"}><button className="btn" disabled ={name == "" ? true : false } style={name =="" || email =="" || school=="(select one option)" || career =="(select one option)" ? {backgroundColor: "#AFE3FF"} : {}} onClick={Link  to={"/PersonalPageConti"}}>Continue</button></Link> */}
                {name =="" || email =="" || school=="(select one option)" || career =="(select one option)" ? <Button disabled>Hi</Button> : <Link to={"/PersonalPageConti"}><button className="btn">Hi enabled</button></Link>} 
                </div>

            

            
            </div>
        </div>

    </div>
    {/* {console.log(school)}
    {console.log(career)} */}
   </>
 

}