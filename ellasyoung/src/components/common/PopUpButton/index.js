import React, { useState } from 'react';
import {Container, ProjectImage, Row, TitleCont, TitleTextCont} from './PopUpButtonElements';
import Text from '../text/Text'
import {FaGithub} from "react-icons/fa6";
import Button from "../Button";
import PopUp from "../PopUp";

const PopUpButton = ({title, subtitle, imgsrc, link}) => {

    const [showPopUp, setShowPopUp] = useState(false);

    const externalLinkOnClick = (url) => {
        window.open(url, '_blank');
    }

    const togglePopUp = () => {
        setShowPopUp(!showPopUp);
    }

    return (
        <>
            <Container onClick={togglePopUp}>
                <Row>
                    <ProjectImage src={imgsrc}/>
                    <TitleCont>
                        <TitleTextCont>
                            <Text fontSize="18px" fontWeight="bold">{title}</Text>
                            <Text fontSize="14px" fontStyle="italic">{subtitle}</Text>
                        </TitleTextCont>
                        <Button
                            height="40px"
                            padding="0px 20px"
                            gap="10px"
                            onClick={() => externalLinkOnClick(link)}
                        >
                            <Text fontSize="14px" fontWeight="bold">Implementation</Text>
                            <FaGithub size="18"/>
                        </Button>
                    </TitleCont>
                </Row>
            </Container>
            {showPopUp && (
                <PopUp closePopUp={togglePopUp}/>
            )}
        </>
    );
};

export default PopUpButton;
