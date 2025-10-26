import styled from "styled-components";
import { black } from "../../../../constants/colors";

export const StyledText = styled.p`
    font-size: ${props => props.fontSize || '12px'};
    font-weight: ${props => props.fontWeight || 'normal'};
    font-style: ${props => props.fontStyle || 'normal'};
    text-decoration: ${props => props.textDecoration || 'none'};
    text-transform: ${props => props.transform || 'none'};
    
    letter-spacing: ${props => props.spacing || '0px'};
    line-height: ${props => props.lineHeight || '1.5'};
    
    margin: ${props => props.margin || '0px'};
    padding: ${props => props.padding || '0px'};
    
    color: ${black};
    
    position: relative;
`;
