import { Button, Card } from "react-bootstrap";
import FollowButton from "./FollowButton";
import Rectangle80 from "../imgs/Rectangle80.svg"
export default function SpeakerCard(){
 return <Card style={{height:'336px', width:"966px",display:"inline-block", textAlign:"left"}}>
<img src={Rectangle80} style={{borderRadius:"14px", marginTop:'20px', marginLeft:'20px', height:'120px', width:'120px'}}></img>
<span style={{fontSize:"32px", lineHeight:"120%", textAlign:"left", fontWeight:"bold", marginLeft:"20px", position:"absolute", top:"20px"}}>Amanda Rodriguez</span>
<div style={{fontSize:"18px", lineHeight:"120%", textAlign:"left", marginLeft:"20px", display:"inline-block", position:'relative', top:"12px"}}>Director of Research, Department of Medicine, University of XYZ</div>
<div style={{display:"inline-block",position:"absolute", top:"44px", left:"846.9px" }}>
<div style={{fontSize:"14px", textAlign:'center', lineHeight:"120%"}}>1124 followers</div>
<div style={{marginTop:'8px'}}><FollowButton/></div>
</div>


<div style={{display:"flex", gap:"6px", position:'absolute', top:"104px", left:"160px"}}>
<span style={{height:'21px', width: "auto", backgroundColor:"#006296", color:"white", borderRadius:"999px", fontSize:"14px", fontWeight:"600", lineHeight:"120%", textAlign:"center", display:"inline-block", paddingLeft:"10px", paddingRight:'10px', paddingTop:"2px", paddingBottom:"2px"}}>Artificial Intelligence</span>
<span style={{height:'21px', width: "auto", backgroundColor:"#006296", color:"white", borderRadius:"999px", fontSize:"14px", fontWeight:"600", lineHeight:"120%", textAlign:"center", display:"inline-block" , paddingRight:'10px', paddingTop:"2px", paddingBottom:"2px", paddingLeft:"10px"}}>Computer Science</span>

</div>
<div style={{fontSize:"18px", fontWeight: 'bold', lineHeight:"120%", width:"fitContent", marginLeft:"160px", marginTop:"9px"}}>Upcoming Events</div>

<div>
    <span></span>
</div>

 </Card>
}