import React, {useState} from "react";
import { Link } from "react-router-dom";
export default function PersonalPageConti(){
    let[industry, setIndustry] = useState("(select one option)");
    let[field, setField] = useState("(select one option)");
    let[activebtn2, setActiveBtn2] = useState(false);
    let[activebtn3, setActiveBtn3] = useState(false);
    let [bgColor, setBgColor] = useState("#99BEEC");
    let[btn3Color, setBtn3Color] = useState("#DDE9F9");

    function styleChangebtn2(){
        setActiveBtn2(true);
        setBgColor("#007CBE");
        

    }
    function styleChangebtn3(){
        setActiveBtn3(true);
        setBtn3Color("#007CBE");

    }
    return <>
        
<div className="ContainerBox">
        
        <div className="Box b1">
            <div id="Heading"><img src="src\imgs\logo.jpg" id="logoImg"></img> </div>
            <div id="Motto">Leaders and thinkers come together through AI-driven events to engage with luminaries across various fields, gaining cutting-edge insights and building a valuable network to <b>shape the future together</b> </div>
            <div id="Globe" ><img src="src\imgs\globe.svg" style={{margin:"0", overflow:"hidden"}}></img></div>
        </div>
        <div className="Box b2">
            <div className="WelcomeHeading"><p>Welcome!</p></div>
            <div className="PersonalInfoBox">
                
                <div className="IndustryBox" >
                  What industry do you work in?
                   
                    <select className="inputBox" name="industry"  value={industry} onChange={e=> setIndustry(e.target.value)} style={industry =="(select one option)" ? {color:"#9F9C9C"} :{}}>
                        <option disabled hidden >(select one option)</option>
                        <option value= "Technology">Technology</option>
             
                    </select>

                </div>

                <div className="FieldBox" >
                 What field are you interested in?
                    
                    <select className="inputBox" name="field"  value={field} onChange={e => setField(e.target.value)} style={field =="(select one option)" ? {color:"#9F9C9C"} :{}} >
                        <option disabled hidden >(select one option)</option>
                        <option value= "Computer Science"> Computer Science </option>

                    </select>

                </div>

                <div className="ButtonBox">
                    What do you plan to use the app for?
                    <button className="btn2" onClick={styleChangebtn2} style={{backgroundColor: `${bgColor}`}} disabled={activebtn3}>Find and Attend Events</button>
                    {/* <button>Plan and Host Events</button> */}

                </div>
                <div className="ButtonBox btn3Box">
                <button className="btn3" onClick={styleChangebtn3} style={{backgroundColor: `${btn3Color}`}} disabled={activebtn2}>Plan and Host Events</button>
                </div>


                <div className="btnBox" style={{marginTop:"83px"}}>
              <Link to={"/CommunityPage"}><button className="btn">Continue</button></Link>
                </div>
                
                

            

            
            </div>
        </div>

    </div>
    
    </>

}