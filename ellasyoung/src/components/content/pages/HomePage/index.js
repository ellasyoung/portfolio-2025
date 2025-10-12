import {PageContainer} from "./HomePageElements";
import NavCol from "../home-page/columns/NavCol";
import BodyCol from "../home-page/columns/BodyCol";

const HomePage = () => {
    return (
        <PageContainer>
            <NavCol/>
            <BodyCol/>
        </PageContainer>
    );
};

export default HomePage;