import styled from "styled-components";
import { offWhite, black, shadowLight, shadowDark } from "../../constants/colors";

export const Column = styled.div`
    width: 16%;
    //box-shadow: -20px 20px 50px ${shadowLight}, 20px 20px 50px ${shadowDark};
    box-shadow: -6px 6px 10px ${shadowLight}, 6px 6px 10px ${shadowDark};
    height: 92vh;
    margin: 4vh;
    position: fixed;
    z-index: 1000;
    background-color: ${offWhite};
    border-radius: 25px;
`;

export const Logo = styled.a`
    font-family: 'Bungalow', sans-serif;
    margin-left: 25%;
    font-size: 90px;
    margin-bottom: 35px;
    color: ${black};
    text-decoration: none;
`;

export const NavLink = styled.a`
    font-size: 12px;
    letter-spacing: 2px;
    text-decoration: none;
    color: ${black};
    position: relative;
    margin-left: 20px;
`;

export const NavLinkCont = styled.div`
    margin-bottom: 25px;
    height: 40px;
    width: 70%;
    display: flex; 
    align-items: center;
    justify-content: left;
    background-color: ${offWhite};
    border-radius: 10px;
    box-shadow: -2px 2px 6px ${shadowLight}, 2px 2px 6px ${shadowDark};
    cursor: pointer;
    &:hover,
    &:focus {
        outline: none;
        box-shadow: inset -3px 3px 6px ${shadowLight}, inset 3px 3px 6px ${shadowDark};
    }
`;

export const NavCont = styled.div`
    margin-top: 60px;
    display: flex;
    flex-direction: column;
`;

export const NavLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;