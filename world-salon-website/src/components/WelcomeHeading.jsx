import '../Styles/WelcomeHeadingStyle.css';

export default function WelcomeHeading({content}){
    return <>
     <div className="welcome-heading"><p>{content}</p></div>
    </>
}