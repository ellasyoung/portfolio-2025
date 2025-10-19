import styled from "styled-components";

export const Column = styled.div`
    width: 980px;
    margin-left: 285px;
    margin-right: 35px;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    
    @media (max-width: 1300px) {
        width: 580px;
    }

    @media (max-width: 920px) {
        width: 580px;
        margin-left: 35px;
    }

    @media (max-width: 670px) {
        width: 90%;
    }
`;
