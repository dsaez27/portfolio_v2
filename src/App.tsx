import { lazy } from "react";

import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";

const Home = lazy(() => import("./components/Home"));
const AboutMe = lazy(() => import("./components/AboutMe"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
    return (
        <>
            <Navbar />
            <div className="container mx-auto flex max-w-4xl flex-wrap items-center justify-between px-4">
                <Home />
                {/* <AboutMe /> */}
                <Skills />
                <Projects />
                <Contact />
            </div>
            <Footer />
        </>
    );
}

export default App;
