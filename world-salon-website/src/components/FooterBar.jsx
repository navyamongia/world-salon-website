import mail from"../imgs/mail.svg";
import Youtube from "../imgs/YouTube.svg"
import LinkedInIcon from"../imgs/LinkedInIcon.svg";
import InstagramIcon  from "../imgs/InstagramIcon.svg"

export default function FooterBar(){
    return <div style={{height:'121px', width:'1440px', position:"absolute", bottom:'0px'}}>
        <div style={{float:"left", marginTop:'30px', marginLeft:"240px"}}> 
            <div style={{textAlign:'left'}}>Email:worldsalon@ws.org</div>
            <div style={{textAlign:'left'}}>Address: XXX St. NYC</div>
        </div>
        <div style={{display:'flex', justifyContent:'space-between', width:'192px', marginTop:"49px", float:"right", marginRight:'240px'}}>
            <img src={mail}></img>
            <img src={Youtube}></img>
            <img src={LinkedInIcon}></img>
            <img src={InstagramIcon}></img>
        </div>

    </div>
}