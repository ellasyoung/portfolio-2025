import styled from "styled-components";

export const Column = styled.div`
    width: 16%;
    box-shadow: 10px 0 6px -4px rgba(0, 0, 0, 0.1);
    height: 100vh;
    position: fixed;
`;

export const Logo = styled.a`
    font-family: 'Bungalow', sans-serif;
    font-size: 90px;
    margin-bottom: 25px;
    color: black;
    text-decoration: none;
`;

export const NavLink = styled.a`
    font-size: 14px;
    text-decoration: none;
    color: black;
    position: relative; 
    &::after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background-color: black;
        position: absolute;
        left: 0;
        bottom: -5px; 
        transition: width 0.3s ease; 
    }
`;

export const NavLinkCont = styled.div`
    margin-bottom: 15px;
    margin-left: -5px;
    &:hover ${NavLink}::after {
        width: 100%; // Expand the line to full width on hover
    }
`;

export const NavCont = styled.div`
    margin-left: 25%;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
`;