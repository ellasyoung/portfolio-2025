import styled from "styled-components";
import { offWhite, black, shadowLight, shadowDark } from "../../../../../../constants/colors";
import Button from "../../../../../common/Button";

export const Logo = styled.a`
    font-family: 'Bungalow', sans-serif;
    margin-left: 25%;
    font-size: 90px;
    margin-bottom: 35px;
    color: ${black};
    text-decoration: none;
`;

export const NavCont = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`;

export const NavLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;