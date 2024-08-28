import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import PersonalPage from "../pages/PersonalPage";
import PersonalPageConti from "../pages/PersonalPageConti";
import CommunityPage from "../pages/CommunityPage";
import EventsPage from "../pages/EventsPage";
import SpeakersPage from "../pages/SpeakersPage";
import WelcomePage from "../pages/WelcomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function WebsiteRoutes(){
return(
    <BrowserRouter>
    <Routes>
    <Route path="/"element ={<WelcomePage/>}></Route>
        <Route path="/Login"element ={<LoginPage/>}></Route>
        <Route path="/SignUp" element ={<SignUpPage/>}></Route>
        <Route path ="/PersonalPage" element ={<PersonalPage/>}></Route>
        <Route path="/PersonalPageConti" element ={<PersonalPageConti/>}></Route>
        <Route path="/CommunityPage" element={<CommunityPage/>}></Route>
        <Route path="/EventsPage" element={<EventsPage/>}></Route>
        <Route path="/SpeakersPage" element={<SpeakersPage/>}></Route>
    </Routes>

    </BrowserRouter>
);
}