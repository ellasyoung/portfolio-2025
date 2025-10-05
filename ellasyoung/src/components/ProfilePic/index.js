import {Container, PicContainer, Title, Text, TextCol} from "./ProfilePicElements";
import profilePic from "../../assets/images/headshot.png";

const ProfilePic = () => {
    return (
        <Container>
            <TextCol>
                <Title>hi, i'm ella:</Title>
                <Text>software engineer,</Text>
                <Text>designer,</Text>
                <Text>skier, cat lover,</Text>
                <Text>and so much more!</Text>
            </TextCol>
            <PicContainer>
                <img src={profilePic} alt="Profile Pic" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} />
            </PicContainer>
        </Container>
    );
};

export default ProfilePic;