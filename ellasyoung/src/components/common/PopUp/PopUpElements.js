import styled from "styled-components";
import { offWhite, black, shadowLight, shadowDark } from "../../../constants/colors";


export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1000;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    position: absolute;
    background-color: ${offWhite};
    color: ${black};
    height: 500px;
    width: 80%;
    border-radius: 20px;
    display: flex;
`;

export const CloseButton = styled.div`
    position: absolute;
    top: 30px;
    right: 30px;
`;