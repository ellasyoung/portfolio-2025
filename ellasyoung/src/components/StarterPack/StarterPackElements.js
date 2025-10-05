import styled from "styled-components";
import { offWhite, black, shadowLight, shadowDark } from "../../constants/colors";

export const Container = styled.div`
    width: 50%;
    box-shadow: -6px 6px 10px ${shadowLight}, 6px 0px 10px ${shadowDark};
    height: 350px;
    margin: 35px;
    background-color: ${offWhite};
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InnerCont = styled.div`
    width: 85%;
    box-shadow: inset -4px 4px 7px ${shadowLight}, inset 7px 0px 7px ${shadowDark};
    height: 65%;
    background-color: ${offWhite};
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TitleCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 85%;
    height: 20%;
    margin-top: 10px;
`;

export const Title = styled.p`
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 2px;
    text-decoration: none;
    color: ${black};
    margin-left: 10px;
`;