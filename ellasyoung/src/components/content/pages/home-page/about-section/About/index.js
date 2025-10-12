import { AboutContainer, AboutTxtContainer, Circle, InnerCircle, TextBlock, TextContainer, StyledLink } from "./AboutElements";
import profilePic from "../../../../../../assets/images/headshot.png";
import Text from "../../../../../common/text/Text"

const About = () => {

    const externalLinkOnClick = (url) => {
        window.open(url, '_blank');
    }

    return (
        <AboutContainer id="about">
            <Circle>
                <InnerCircle onClick={() => externalLinkOnClick("https://www.linkedin.com/in/ellasyoung")}>
                    <img src={profilePic} alt="Profile Pic" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} />
                </InnerCircle>
            </Circle>
            <AboutTxtContainer/>
            <TextContainer>
                <TextBlock className="first">
                    <Text fontSize="15px" margin="0 0 20px 0">
                        Hi, <StyledLink href="https://linkedin.com/in/ellasyoung" target="_blank">I'm Ella,</StyledLink> a full stack developer passionate about the intersection of design and engineering.
                    </Text>
                    <Text fontSize="15px" margin="0 0 20px 0">
                        Currently, I’m an <StyledLink href="https://www.ukg.com" target="_blank">Associate Software Engineer at UKG</StyledLink>, where I work on UKG Ready; a comprehensive
                        human capital management platform that helps organizations manage their people and processes with
                        ease. I work within the Time and Labor Management division of Ready, developing features like
                        timesheets, pay calculation rules, and expense tracking. My goal is to deliver reliable,
                        performant, and intuitive solutions that make complex time and pay management tasks accurate and
                        effortless for end users.
                    </Text>
                </TextBlock>
                <TextBlock className="second">
                    <Text fontSize="15px" margin="0 0 20px 0">
                        Previously, I attended <StyledLink href="https://reporter.mcgill.ca/mcgill-no-1-in-canada-in-2026-qs-world-university-rankings/" target="_blank">McGill University</StyledLink>,
                        where I served as the <StyledLink href="https://www.mcwics.com/" target="_blank">President of McGill Women in Computer <br/> Science</StyledLink>, after first joining as Director of Design.
                        As a McWiCS executive, I leveraged my leadership and design <br/> skills to help students break into the tech industry
                        by organizing networking and social events, hands-on workshops, <br/> and our annual hackathon. During my time at McGill
                        I also
                        completed two unique software development internships and <br/> worked on numerous end-to-end projects
                        that taught me how to take ownership from ideation to deployment.
                    </Text>
                    <Text fontSize="15px" margin="0 0 20px 0">
                        In my free time you can find me skiing, crocheting, or designing and sewing my own clothing.
                    </Text>
                </TextBlock>
            </TextContainer>
        </AboutContainer>
    );
};

export default About;