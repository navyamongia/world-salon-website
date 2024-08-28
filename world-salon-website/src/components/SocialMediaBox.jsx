import Google from "../imgs/Google.svg"
import "../Styles/SocialMediaBoxStyles.css"
import Apple from "../imgs/Apple.svg"
import Facebook from "../imgs/Facebook.svg"
export default function SocialMediaBox(){
    return <>
    <div  className="container-box">
    <img src={Facebook}></img>
    <img src={Google}></img>
    <img src={Apple}></img>
    </div>
    </>
}