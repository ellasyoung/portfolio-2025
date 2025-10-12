import { PageContainer, ContentContainer } from "./HomePageElements";
import NavCol from "../home-page/columns/NavCol";
import BodyCol from "../home-page/columns/BodyCol";

const HomePage = () => {
    return (
        <PageContainer>
            <ContentContainer>
                <NavCol/>
                <BodyCol/>
            </ContentContainer>
        </PageContainer>
    );
};

export default HomePage;