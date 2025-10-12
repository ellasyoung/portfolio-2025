import styled from "styled-components";
import {black} from "../../../../constants/colors";

export const StyledText = styled.p`
    font-size: ${props => props.fontSize || '12px'};
    font-weight: ${props => props.fontWeight || 'normal'};
    text-decoration: ${props => props.textDecoration || 'none'};
    letter-spacing: 2px;
    
    margin: ${props => props.margin || '0px'};
    padding: ${props => props.padding || '0px'};
    
    color: ${black};
    
    position: relative;
`;
