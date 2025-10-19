import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 1280px;
    
    @media (max-width: 1300px) {
        width: 900px;
    }

    @media (max-width: 920px) {
        width: 650px;
    }
    
    @media (max-width: 670px) {
        width: 100%;
    }
    
`;