import Header from "../components/Header.jsx"
import LandingPage from "./LandingPage.jsx";
import AboutPage from "./AboutPage.jsx";
import Portfolio from "./Portfolio.jsx";
import Experience from "./Experience.jsx";
import Sertificate from "./Sertificate.jsx";
import Contacts from "./Contact.jsx";
import Footer from "../components/Footer.jsx";

export default function ContentPage() {
    return (
        <>
            <Header/>
            <LandingPage/>
            <AboutPage/>
            <Portfolio/>
            <Experience/>
            <Sertificate/>
            <Contacts/>
            <Footer/>
        </>
    )
}
