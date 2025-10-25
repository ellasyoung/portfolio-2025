import React, { useState } from 'react';
import { Container as StyledContainer, Left, Right, Row, ExpandedContent } from './ExpandingContElements';
import Text from '../text/Text'
import Button from "../Button";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ExpandingCont = ({ title, subtitle }) => {

    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <StyledContainer>
            <Row className="title-row">
                <Left>
                    <Text
                        fontSize="18px"
                        fontWeight="bold"
                    >
                        {title}
                    </Text>
                    <Text
                        fontSize="14px"
                        fontStyle="italic"
                    >
                        {subtitle}
                    </Text>
                </Left>
                <Right>
                    <Button
                        width="40px"
                        height="40px"
                        margin="0 30px 0 0"
                        justifyContent="center"
                        onClick={toggleExpanded}
                    >
                        {expanded ? <FaChevronUp size="20"/> : <FaChevronDown size="20"/>}
                    </Button>
                </Right>
            </Row>
            { expanded && (
                <Row className="content-row">
                    <ExpandedContent>

                    </ExpandedContent>
                </Row>)
            }
        </StyledContainer>
    )
}

export default ExpandingCont;