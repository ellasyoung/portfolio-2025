import {List, ProjectsContainer} from "./ProjectsElements";
import PopUpButton from "../../../../common/PopUpButton";
import SOCConnectImg from "../../../../../assets/images/socsconnect-cover-img.png"
import BVHImg from "../../../../../assets/images/bvh-cover-img.png"

const Projects = () => {
    return (
        <ProjectsContainer id="projects">
            <List>
                <PopUpButton
                    title="SocsConnect"
                    subtitle="November - December 2024"
                    imgsrc={SOCConnectImg}
                    link="https://github.com/ellasyoung/SOCSconnect"
                />
                <PopUpButton
                    title="2D Collision Simulation"
                    subtitle="April 2022"
                    imgsrc={BVHImg}
                    link="https://github.com/ellasyoung/2D-collision-simulation"
                />
            </List>
        </ProjectsContainer>
    );
};

export default Projects;