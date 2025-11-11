import styled from "styled-components";
import { offWhite, black, shadowLight, shadowDark } from "../../../constants/colors";

export const Container = styled.div`
    box-shadow: -6px 6px 10px ${shadowLight}, 6px 0px 10px ${shadowDark};
    background-color: ${offWhite};
    color: ${black};
    width: 100%;
    border-radius: 20px;
    position: relative;
    
    display: flex;
    flex-direction: column;
    
    cursor: pointer;

    &:hover,
    &:focus {
        box-shadow: inset -6px 6px 10px ${shadowLight}, inset 6px 0px 10px ${shadowDark};
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;

    @media (max-width: 670px) {
        flex-direction: column;
        padding-bottom: 35px;
        justify-content: center;
    }
`;

export const ProjectImage = styled.img`
    width: 250px;
    border-radius: 12px;
    object-fit: cover;
    margin: 30px 0;
`;

export const TitleCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 30px;
    padding-right: 30px;
    gap: 15px;

    @media (max-width: 670px) {
        justify-content: center;
        align-items: center;
    }
`;

export const TitleTextCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    @media (max-width: 670px) {
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    
`;