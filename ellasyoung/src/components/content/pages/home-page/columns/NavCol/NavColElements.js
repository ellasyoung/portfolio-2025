import styled from "styled-components";

export const NavCont = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const NavLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const ButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 50px;
`;

export const NavColWrapper = styled.div`
    @media (max-width: 920px) {
        display: none;
    }
`;
