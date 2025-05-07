import {VidContainer, Title} from "./HeroElements";
import GondolaVid from "../../assets/media/gondolasAnimation.mp4"

const Hero = () => {
    return (
        <>
            <Title>EllaSYoung</Title>
            <VidContainer>
                <video src={GondolaVid} autoPlay loop muted playsInline style={{ width: "105%", height: "auto"}} />
            </VidContainer>
        </>
    );
};

export default Hero;