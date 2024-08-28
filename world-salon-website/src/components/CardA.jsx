import { Card } from "react-bootstrap";
import Rectangle51 from "../imgs/Rectangle51.svg";
import Ellipse17 from "../imgs/Ellipse17.svg";
import Ellipse18 from "../imgs/Ellipse18.svg";
import Ellipse19 from "../imgs/Ellipse19.svg";
import Frame3 from "../imgs/Frame3.svg";
import Frame4 from "../imgs/Frame4.svg";
export default function CardA(){
return <Card style={{height:"351px", width:"307px", borderRadius:"6px", boxShadow: "0px 1px 2px rgba(0,0,0,0.30) , 0px 2px 6px 2px rgba(0,0,0,0.15)", padding:'0'}}>
    <img src={Rectangle51} style={{height:"180px", width:"100%"}}></img>
    <div style={{height:'36px', width:'36px', position:'absolute', left:'207px', top:'133px'}}>
    <img src={Frame3}></img>
    </div>

    <div style={{height:'36px', width:'36px', position:'absolute', left:'259px', top:'133px'}}>
    <img src={Frame4}></img>
    </div>
    
    <div style={{height:"47px", width:"283px", marginTop:'12px', marginLeft:"12px"}} >
        <p style={{fontSize:'16px', fontWeight:"bold", textAlign:'left'}}> Unleashing Creativity with AI: A Deep Dive into AI in Research</p>
    </div>
    <div style={{height:'19px', width:'283px', marginTop:'8px', marginLeft:"12px"}}>
        <p style={{fontSize:"14px" , textAlign:'left'}}>Monday, Jun 23, 9:00-11:00 AM · NYU</p>
    </div>
    <div style={{display:'flex' ,alignItems:'flex-start' , marginLeft:'12px', marginTop:'8px'}}>
    <div style={{height:"24px", width:"24px" }}><img src={Ellipse17}></img></div>
    <div style={{height:"24px", width:"24px", position:'absolute', left:'24px'}}><img src={Ellipse18}></img></div>
    <div style={{height:"24px", width:"24px" , position:'relative'}}><img src={Ellipse19}></img></div>
    <div style={{height:'19px', width:'239px', marginLeft:'8px'}}><p style={{fontSize:'14px', color:'#AAB9C5', textAlign:'left',margin:'0'}}>10 Speakers · 181 attendees</p></div>
    </div>

    
        <p style={{textAlign:"left", fontSize:'16px', fontWeight:'bold', marginLeft:'12px', marginTop:'12px'}}>From $10</p>
   

   


</Card>
}