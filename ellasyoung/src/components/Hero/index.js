import StarterPack from "../StarterPack";
import ProfilePic from "../ProfilePic"
import {HeroContainer} from "./HeroElements";

const Hero = () => {
    return (
        <>
            <HeroContainer>
                <StarterPack/>
                <ProfilePic/>
            </HeroContainer>
        </>
    );
};

export default Hero;