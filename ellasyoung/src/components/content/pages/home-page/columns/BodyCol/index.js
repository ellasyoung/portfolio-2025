import { Column } from "./BodyColElements";
import Hero from "../../hero-section/Hero";
import About from "../../about-section/About";
import Experience from "../../experience-section";
import Projects from "../../projects-section";
import Contact from "../../contact-section";

const BodyCol = () => {
    return (
        <Column>
            <Hero/>
            <About/>
            <Experience/>
            <Projects/>
            <Contact/>
        </Column>
    );
};

export default BodyCol;