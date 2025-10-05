import styled from "styled-components";
import { offWhite, black, shadowLight, shadowDark } from "../../constants/colors";

export const Container = styled.div`
    width: 50%;
    box-shadow: -6px 6px 10px ${shadowLight}, 6px 0px 10px ${shadowDark};
    height: 170px;
    margin: 10px 35px;
    background-color: ${offWhite};
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const SongInfo = styled.div`
    height: 120px;
    width: 65%;
    margin-left: 35px;
    display: flex;
    flex-direction: column;
`;

export const SongCont = styled.div`
    box-shadow: -6px 6px 10px ${shadowLight}, 6px 0px 10px ${shadowDark};
    height: 90px;
    background-color: ${offWhite};
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const AblumCover = styled.div`
    width: 120px;
    height: 120px;
    box-shadow: -6px 6px 10px ${shadowLight}, 6px 0px 10px ${shadowDark};
    background-color: ${offWhite};
    border-radius: 12px;
`;

export const Title = styled.p`
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 2px;
    text-decoration: none;
    color: ${black};
    margin-right: 10px;
`;

export const Text = styled.p`
    font-size: 14px;
    letter-spacing: 2px;
    color: ${black};
    
    &.italics {
        font-style: italic;
    }
    
    &.currlisten {
        margin-top: 0;
    }
`;

export const IconButton = styled.button`
    background: transparent;
    border: none;
    padding: 0;
    margin-left: 20px;
    margin-right: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

export const ProgressContainer = styled.div`
    flex: 1;
    margin: 10px 20px 0 20px;
    position: relative;
    height: 4px;
    background: ${shadowLight};
    border-radius: 2px;
    cursor: pointer;
`;

export const ProgressFilled = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: ${black};
    border-radius: 2px;
    pointer-events: none;
`;

export const ProgressThumb = styled.div`
    position: absolute;
    top: 50%;
    width: 16px;
    height: 16px;
    background: ${black};
    border-radius: 50%;
    cursor: pointer;
    transform: translate(-50%, -50%);
    pointer-events: none;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
