import { Card } from "react-bootstrap"
import Ellipse20 from "../imgs/Ellipse20.svg";
export default function CardB(){
    return <Card style={{height:'120px', width:'472px', borderRadius:'6px', boxShadow:'0px 1px 2px rgba(0,0,0,0.3) , 0px 2px 6px 2px rgba(0,0,0,0.15) ', flexDirection:'row', flexWrap:'wrap'}}>
        <div style={{height:'80px', width:'80.34px', marginLeft:'24.1px' , marginTop:'20px'}}>
            <img src={Ellipse20}></img>
        </div>
    
    <span style={{height:'23px', width:'133.57px', marginTop:'24px', marginLeft:'60.26px', fontSize:'24px' , fontWeight:'bold', lineHeight:'120%'}}>
   Apple Jobs
    </span>
        <span style={{marginTop:'34px', height:'19px', width:'133.57px', fontSize:'14px', textAlign:'left', lineHeight:'120%'}}>
        · CEO of Banana
        </span>

        <span style={{height:'39px', width:'279.18px', fontSize:'12px',position:'absolute', left:'164.7px' , top:"59px"}}>
        <p style={{textAlign:'left'}}>“Whether you think you can or you think you can't, you're right”</p>
        </span>
        
       
        
    </Card>
}