import Frame from "../logos/Frame.svg";
import "../Styles/ContainerStyle.css";
export default function ContainerBox({content}){
    return<>
    <div className="ContainerBox">
        <div className=" b1">
            <div>
                <img src= {Frame} style={{position:"absolute" , top:"299px", left:"25px"}}></img>
            </div>
        
        </div>
        <div className="b2">
            <>{content}</>
        </div>

    </div>
    
    </>
}