import styled from "styled-components";
import { offWhite, black, shadowLight, shadowDark } from "../../constants/colors";

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

export const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.p`
    font-family: 'Bungalow', sans-serif;
    color: ${black};
    margin: 0;
    position: absolute;
    
    &.firstName {
        font-size: 425px;
        top: 60px;
        right: 140px;
        z-index: 20;
    }
    
    &.lastName {
        font-size: 425px;
        z-index: 5;
        top: 400px;
        right: 50px;
    }
`;
