import {VidContainer, Title} from "./GondolaVidElements";
import GondolaVideo from "../../assets/media/gondolasAnimation.mp4"

const GondolaVid = () => {
    return (
        <>
            <Title>EllaSYoung</Title>
            <VidContainer>
                <video src={GondolaVideo} autoPlay loop muted playsInline style={{ width: "105%", height: "auto"}} />
            </VidContainer>
        </>
    );
};

export default GondolaVid;