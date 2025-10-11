import {HeroContainer, Row, Title} from "./HeroElements";

import StarterPack from "../StarterPack";
import ProfilePic from "../ProfilePic"
import PlaySong from "../PlaySong";

//<Title className="lastName">Young</Title>

const Hero = () => {
    return (
        <HeroContainer>
            <Row>
                <StarterPack/>
                <ProfilePic/>
            </Row>
            <PlaySong />
            <Title className="firstName">Ella</Title>
            <Title className="lastName">Young</Title>
        </HeroContainer>
    );
};

export default Hero;