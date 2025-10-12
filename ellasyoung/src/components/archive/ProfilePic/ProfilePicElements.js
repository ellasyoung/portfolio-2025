import styled from "styled-components";
import {black, offWhite, shadowDark, shadowLight} from "../../../constants/colors";

export const Container = styled.div`
    width: 37%;
    box-shadow: -6px 6px 10px ${shadowLight}, 6px 0px 10px ${shadowDark};
    height: 180px;
    margin: 35px 20px;
    background-color: ${offWhite};
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 30;
`;

export const PicContainer = styled.div`
    height: 140px;
    box-shadow: -6px 6px 10px ${shadowLight}, 6px 0px 10px ${shadowDark};
    width: 140px;
    background-color: ${offWhite};
    border-radius: 50%;
    margin-right: 35px;
`;

export const Title = styled.p`
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 2px;
    text-decoration: none;
    color: ${black};
`;

export const Text = styled.a`
    font-size: 12px;
    letter-spacing: 2px;
    text-decoration: none;
    color: ${black};
    position: relative;
    margin-bottom: 8px;
`;

export const TextCol = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 35px;
`;