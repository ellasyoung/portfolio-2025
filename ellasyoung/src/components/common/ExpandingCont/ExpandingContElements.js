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
`;

export const Left = styled.div`
    position: relative;
    margin-left: 30px;
`;

export const Right = styled.div`
    position: relative;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    
    &.title-row {
        height: 100px;
    }
`;

export const ExpandedContent = styled.div`
    height: 300px;
    margin: 0 30px 30px 30px;
    width: 100%;
    border-radius: 15px;
    box-shadow: inset -3px 3px 6px ${shadowLight}, inset 3px 0px 6px ${shadowDark};
`;
