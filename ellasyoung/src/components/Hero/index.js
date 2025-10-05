import {HeroContainer, Row} from "./HeroElements";

import StarterPack from "../StarterPack";
import ProfilePic from "../ProfilePic"
import PlaySong from "../PlaySong";

const Hero = () => {
    return (
        <HeroContainer>
            <Row>
                <StarterPack/>
                <ProfilePic/>
            </Row>
            <PlaySong />
        </HeroContainer>
    );
};

export default Hero;