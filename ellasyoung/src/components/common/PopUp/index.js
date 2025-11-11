import React, { useState } from 'react';
import Text from '../text/Text'
import Button from "../Button";
import {Background, CloseButton, Container} from "./PopUpElements";
import {IoClose} from "react-icons/io5";


const PopUp = ({ closePopUp }) => {
    return (
        <Background>
            <Container>
                <CloseButton>
                    <Button
                        width="40px"
                        height="40px"
                        justifyContent="center"
                        onClick={closePopUp}
                    >
                        <IoClose size="26" />
                    </Button>
                </CloseButton>
            </Container>
        </Background>
    );
}

export default PopUp;