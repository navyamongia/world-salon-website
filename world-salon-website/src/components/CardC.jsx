import React from "react";
import Rectangle54 from "../imgs/Rectangle54.svg";
import { Card } from "react-bootstrap";
import Ellipse21 from "../imgs/Ellipse21.svg";
import PlayVector from "../imgs/PlayVector.svg"
export default function CardC(){
return <Card style={{height:'368px', width:'472px', borderRadius:'10px', boxShadow:'0px 4px 8px 3px rgba(0,0,0,0.15) , 0px 1px 3px rgba(0,0,0,0.30) ', padding:'0px'}}>
    {/* <div style={{height:'240px', width:'472px'}}> */}
        <img src={Rectangle54} height="240px" width="100%"></img>
        <img src={PlayVector} style={{position:"absolute", right:"17px", top:"173px"}}></img>
    {/* </div> */}
    {/* <p style={{height:'56px', width:'423.8px', textAlign:'left', fontSize:'18px', fontWeight:'bold', marginLeft:'24.1px', marginTop:'13px', marginBottom:'0'}}>Unleashing Creativity with AI: A Deep Dive into AI in Research</p> */}
    <div style={{textAlign:"left", fontSize:'18px', fontWeight:"bold", marginLeft:"24.1px", marginTop:"13px", marginRight:"24.1px"}}>Unleashing Creativity with AI: A Deep Dive into AI in Research</div>
    <div style={{ marginTop:'12px'}}>
        <img src={Ellipse21} style={{height:"24px", width:"24.1px", float:'left', marginLeft:'24.1px'}}></img>
        <span style={{textAlign:'left', fontSize:'16px', fontWeight:'600', float:'left', marginLeft:'8.03px'}}>By NYU</span>
        <span style={{float:"right", textAlign:'left', fontSize:'16px', marginRight:'24px'}}>08:20</span>


    </div>
</Card>
}