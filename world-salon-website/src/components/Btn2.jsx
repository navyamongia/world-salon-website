import { Button } from "react-bootstrap"
export default function Btn2({bgColor, handleClick, content}){
    // function handleClick(){
    //     return <Button style={{height:"53px", width:"491px", fontSize:"24px", fontWeight:"bold",  color:"white", backgroundColor:'#006296', borderRadius:"10px"}}></Button>
    // }
    let color = `${bgColor}`;
    // console.log(color)
    return <Button style={{height:"53px", width:"491px", fontSize:"24px", fontWeight:"bold",  color:"white", backgroundColor: `${color}`, borderRadius:"10px"}} onClick={handleClick}>{content}</Button>
}