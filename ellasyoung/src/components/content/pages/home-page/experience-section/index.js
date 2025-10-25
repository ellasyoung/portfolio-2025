import { ExperienceContainer, List } from "./ExperienceElements";
import ExpandingCont from "../../../../common/ExpandingCont";

const Experience = () => {
    return (
        <ExperienceContainer id="experience">
            <List>
                <ExpandingCont
                    title="Associate Software Engineer"
                    subtitle="UKG"
                ></ExpandingCont>
                <ExpandingCont
                    title="Software Engineer Intern"
                    subtitle="Publicis Sapient"
                ></ExpandingCont>
                <ExpandingCont
                    title="Software Developer Intern"
                    subtitle="Microsoft"
                >
                </ExpandingCont>
            </List>
        </ExperienceContainer>
    );
};

export default Experience;