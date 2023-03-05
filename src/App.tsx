import { Home } from "./components/Home";
import { Navbar } from "./components/ui/Navbar";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/ui/Footer";

export const App = () => {
    return (
        <div className="w-full bg-tertiary">
            <Navbar />
            <div className="container mx-auto flex max-w-4xl flex-wrap items-center justify-between px-4">
                <Home />
                <AboutMe />
                <Skills />
                <Projects />
                <Contact />
            </div>
            <Footer />
            
        </div>
    );
};
