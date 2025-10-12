import {Container, InnerCont, TitleCont, Title} from "./StarterPackElements";
import starterPackImg from "../../../assets/images/starter-pack.png";

const StarterPack = () => {
    return (
        <Container>
            <TitleCont>
                <Title>my starter pack</Title>
            </TitleCont>
            <InnerCont>
                <img src={starterPackImg} alt="Starter Pack" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '25px', marginTop: '5px'}} />
            </InnerCont>
        </Container>
    );
};

export default StarterPack;