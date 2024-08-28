import { Button } from "react-bootstrap"
export default function Btn1({content, onClick}){
return<>
<Button style={{height:"53px" , width:"491px", backgroundColor:"#006296", borderRadius:"10px", border:"none", fontSize:"24px", fontWeight:"bold", color:"white"}} onClick={onClick}>{content}</Button>
</>
}