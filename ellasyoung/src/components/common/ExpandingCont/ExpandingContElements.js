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
`;

export const Right = styled.div`
    position: relative;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    &.title-row {
        height: 100px;
        padding-left: 30px;
        padding-right: 30px;
        @media (max-width: 670px) {
            height: 120px;
        }
    }
    
    &.company-button {
        margin-top: 30px;
        justify-content: flex-end;
    }
`;

export const ExpandedContent = styled.div`
    margin: 0 30px 30px 30px;
    width: 100%;
    border-radius: 15px;
    box-shadow: inset -3px 3px 6px ${shadowLight}, inset 3px 0px 6px ${shadowDark};
`;

export const InnerContent = styled.div`
    margin: 30px;
    
    .full-txt {
        display: inline;
    }

    .part-txt {
        display: none;
    }

    @media (max-width: 670px) {
        .full-txt {
            display: none;
        }

        .part-txt {
            display: inline;
        }
    }
`;

export const TechContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 15px 0;
    gap: 10px;
`;

export const TechItem = styled.div`
    padding: 0 25px;
    height: 40px;
    border-radius: 10px;
    box-shadow: inset -3px 3px 6px ${shadowLight}, inset 3px 0px 6px ${shadowDark};
    background-color: ${offWhite};
    display: flex;
    align-items: center;
`;