import React from "react";
import EventsPage from "./EventsPage";
import FooterBar from "../components/FooterBar";
import CardC from "../components/CardC";
import CardB from "../components/CardB";
import CardA from "../components/CardA";
import { Row , Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import { useState, useEffect } from "react";

export default function CommunityPage(){
    

    return<div style={{overflow: "hidden", width: "100%", height: "2629px", position:'relative'}}>
        
    <NavigationBar/>
    <div style={{textAlign:'left', fontSize:'56px', fontWeight:'bold', lineHeight:'120%', marginLeft:"237px", marginTop:"60px"}}>Events
    <Link to={'/EventsPage'} style={{textDecoration:"none", fontWeight:'500', color:"#006296"}}>  <span style={{fontSize:'16px', lineHeight:'24px', marginLeft:"706px"}}>View All</span></Link>
    </div>
   
    
   
    <Row style={{marginLeft:'237px', gap:"24px"}}>
        {[...Array(6)].map((e,i)=>{
           
            return <CardA/>
           
        })}
       
    </Row>
    <div style={{textAlign:'left', fontSize:'56px', fontWeight:'bold', lineHeight:'120%', marginLeft:"237px", marginTop:"60px"}}>Speakers
    <Link to={'/SpeakersPage'} style={{textDecoration:"none", fontWeight:'500', color:"#006296"}}>  <span style={{fontSize:'16px', lineHeight:'24px', marginLeft:"638px"}}>View All</span></Link>
    </div>
    <Row style={{marginLeft:'237px', gap:"24px"}}>
        {[...Array(6)].map((e,i)=>{
            
            return <CardB/>
           
        })}
       
    </Row>
    <div style={{textAlign:'left', fontSize:'56px', fontWeight:'bold', lineHeight:'120%', marginLeft:"237px", marginTop:"60px"}}>Event Highlights
    <span style={{fontSize:'16px', lineHeight:'24px', marginLeft:"441px", fontWeight:'500', color:"#006296"}}>View All</span>
    </div>
    <Row style={{marginLeft:'237px', gap:"24px"}}>
        {[...Array(4)].map((e,i)=>{
           
            return <CardC key={i}/>
           
        })}
       
    </Row>

    <FooterBar/>
    </div>
    
    
   
}