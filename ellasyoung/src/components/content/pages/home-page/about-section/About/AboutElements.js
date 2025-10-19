import styled from "styled-components";
import { offWhite, shadowLight, shadowDark } from "../../../../../../constants/colors";
import { ReactComponent as AboutContainerSVG } from "../../../../../../assets/shapes/about-container.svg"
import { ReactComponent as AboutContainerMdSVG } from "../../../../../../assets/shapes/about-container-md.svg";

export const AboutContainer = styled.div`
    position: relative;
    margin: 35px 0 35px 0;
`;

export const Circle = styled.div`
    width: 215px;
    height: 215px;
    border-radius: 50%;
    box-shadow: -6px 6px 10px ${shadowLight}, 6px 0px 10px ${shadowDark};
    background-color: ${offWhite};
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InnerCircle = styled.div`
    width: 175px;
    height: 175px;
    border-radius: 50%;
    position: relative;
    z-index: 5;
    overflow: hidden;
    transition: width 0.3s ease, height 0.3s ease;
    
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 50%;
        box-shadow: inset -3px 3px 6px ${shadowLight}, inset 3px 0px 6px ${shadowDark};
        pointer-events: none;
        z-index: 10;
    }
    
    &:hover {
        width: 215px;
        height: 215px;
        cursor: pointer;
    }
`;

export const TextBlock = styled.div`
    width: 880px;
    
    &.first {
        width: 630px;
    }
    
    &.lg {
        display: block;
    }
    
    &.md {
        display: none;
    }
    
    @media (max-width: 1300px) {
        &.lg {
            display: none;
        }
        &.md {
            display: block;
            width: 480px;
        }

        @media (max-width: 670px) {
            &.md {
                display: none;
            }
        }
    }
    
`;

export const TextContainer = styled.div`
    position: absolute;
    top: 60px;
    left: 50px;
    z-index: 2;
`;

export const AboutTxtContainer = styled(AboutContainerSVG)`
    fill: ${offWhite};
    filter: drop-shadow(-6px 6px 10px ${shadowLight}) drop-shadow(6px -3px 4px ${shadowDark});
    display: block;

    @media (max-width: 1300px) {
        display: none;
    }
`;

export const AboutTxtContainerMd = styled(AboutContainerMdSVG)`
    display: none;

    @media (max-width: 1300px) {
        display: block;
        fill: ${offWhite};
        filter: drop-shadow(-6px 6px 10px ${shadowLight}) drop-shadow(6px -3px 4px ${shadowDark});
    }

    @media (max-width: 670px) {
        display: none;
    }
    
`;

export const StyledLink = styled.a`
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    color: black;
    
    &:hover {
        font-style: italic;
    }
`;

