import styled from "styled-components";
import { offWhite, black, shadowLight, shadowDark } from "../../../constants/colors";


export const Container = styled.div`
    box-shadow: -6px 6px 10px ${shadowLight}, 6px 0px 10px ${shadowDark};
    background-color: ${offWhite};
    color: ${black};
    
    width: ${props => props.width || 'auto'};
    min-width: ${props => props.minWidth || 'auto'};
    height: ${props => props.height || 'auto'};
    min-height: ${props => props.minHeight || 'auto'};

    border-radius: ${props => props.borderRadius || '25px'};
    margin: ${props => props.margin || '0px'};
    
    position: ${props => props.position || 'relative'};
    z-index: ${props => props.zIndex || 'auto'};
`;
