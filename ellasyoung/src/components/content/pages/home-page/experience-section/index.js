import { ExperienceContainer, List } from "./ExperienceElements";
import ExpandingCont from "../../../../common/ExpandingCont";

const Experience = () => {
    return (
        <ExperienceContainer id="experience">
            <List>
                <ExpandingCont
                    title="Associate Software Engineer"
                    subtitle="UKG"
                    blurb="Build and maintain core Workforce Management capabilities for UKG Ready; timesheets,
                    pay-calculation rules, expense tracking, and payroll preparation. Implement performant, accessible
                    features end-to-end: from data management to backend services to frontend React components. Work
                    within an agile, cross-functional team to balance deeply configurable solutions with a simple,
                    intuitive user experience."
                    dates="February 2025 - Present"
                    techList={["Java", "SQL", "React", "TypeScript", "JavaScript", "SCSS"]}
                ></ExpandingCont>
                <ExpandingCont
                    title="Software Engineer Intern"
                    subtitle="Publicis Sapient"
                    blurb="Worked on a digital business transformation project to re-architect data management and
                    integration components for a leading enterprise automotive battery manufacturer. Designed and built
                    a document-oriented database system, secure APIs, and an interactive dashboard to meet client needs."
                    dates="June 2024 - August 2024"
                    techList={["MongoDB", "Node.js", "Express.js", "React", "JavaScript", "Tailwind CSS"]}
                ></ExpandingCont>
                <ExpandingCont
                    title="Software Developer Intern"
                    subtitle="Microsoft"
                    blurb="Optimized the conversational chatbot tooling platform Nuance Mix Dialog by integrating
                    Microsoft Copilot to reduce the manual development workload. Enhanced Mix’s user interface,
                    building new components using React, TypeScript, and Redux with a focus on accessible design and
                    user experience."
                    dates="May 2023 - August 2023"
                    techList={["React", "TypeScript", "JavaScript", "CSS"]}
                >
                </ExpandingCont>
            </List>
        </ExperienceContainer>
    );
};

export default Experience;