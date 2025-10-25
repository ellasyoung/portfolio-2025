import styled from "styled-components";
import { offWhite, black, shadowLight, shadowDark } from "../../../../../constants/colors";

export const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 35px 0 35px 0;
    width: 100%;
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
    width: 100%;
    @media (max-width: 670px) {
        width: 300px;
    }
`