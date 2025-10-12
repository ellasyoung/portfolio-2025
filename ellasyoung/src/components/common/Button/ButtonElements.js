import styled from "styled-components";
import { offWhite, black, shadowLight, shadowDark } from "../../../constants/colors";

export const Button = styled.div`
    margin: ${props => props.margin || '0px'};
    padding: ${props => props.padding || '0px'};
    
    height: ${props => props.height || 'auto'};
    width: ${props => props.width || 'auto'};

    display: flex;
    align-items: center;
    justify-content: ${props => props.justifyContent || 'center'};
    
    background-color: ${offWhite};
    color: ${black};
    border-radius: ${props => props.borderRadius || '10px'};
    box-shadow: -2px 2px 6px ${shadowLight}, 2px 0px 6px ${shadowDark};
    cursor: pointer;
    text-decoration: none;
    
    &:hover,
    &:focus {
        outline: none;
        box-shadow: inset -3px 3px 6px ${shadowLight}, inset 3px 0px 6px ${shadowDark};
    }
`;