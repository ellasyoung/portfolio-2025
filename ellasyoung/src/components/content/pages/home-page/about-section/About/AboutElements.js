import styled from "styled-components";
import { offWhite, black, shadowLight, shadowDark } from "../../../../../../constants/colors";

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: aquamarine;
    height: 100vh;
`;

export const Circle = styled.div`
    width: 20%;
    aspect-ratio: 1;
    border-radius: 50%;
    box-shadow: -6px 6px 10px ${shadowLight}, 6px 0px 10px ${shadowDark};
    background-color: ${offWhite};
`;

export const TextBlock = styled.div`
    width: 75%;
`;


