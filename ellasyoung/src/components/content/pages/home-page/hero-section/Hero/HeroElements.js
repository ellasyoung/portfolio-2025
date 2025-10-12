import styled from "styled-components";
import { offWhite, black, shadowLight, shadowDark } from "../../../../../../constants/colors";

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

export const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: blue;
    height: 100vh;
`;

export const Title = styled.p`
    font-family: 'Bungalow', sans-serif;
    color: ${black};
    margin: 0;
    position: absolute;
    
    &.firstName {
        font-size: 400px;
        top: 50px;
        right: 50px;
    }
    
    &.lastName {
        font-size: 400px;
        top: 300px;
        right: 50px;
    }
`;
