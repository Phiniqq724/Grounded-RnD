import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Portofolio from "./components/Portofolio";
import Services from "./components/Services";

export default function App() {
    return (
        <>
            <Navbar />
            <HomePage />
            <AboutUs />
            <Portofolio />
            <Services />
        </>
    )
}