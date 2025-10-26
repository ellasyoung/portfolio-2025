import React, { useState } from 'react';
import {
    Container as StyledContainer,
    Left,
    Right,
    Row,
    ExpandedContent,
    InnerContent,
    TechContainer, TechItem
} from './ExpandingContElements';
import Text from '../text/Text'
import Button from "../Button";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const ExpandingCont = ({ title, subtitle, blurb, dates, techList, link }) => {

    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const externalLinkOnClick = (url) => {
        window.open(url, '_blank');
    }

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
                        <InnerContent>
                            <Text fontSize="16px" fontWeight="bold">{dates}</Text>
                            <TechContainer>
                                {techList?.map((tech, index) => (
                                    <TechItem key={index}>
                                        <Text fontWeight="bold">{tech}</Text>
                                    </TechItem>
                                ))}
                            </TechContainer>
                            <Text fontSize="14px">{blurb}</Text>
                            <Row className="company-button">
                                <Button
                                    height="40px"
                                    padding="0px 20px"
                                    gap="10px"
                                    onClick={() => externalLinkOnClick(link)}
                                >
                                    <Text fontSize="14px" fontWeight="bold">Learn more about {subtitle}</Text>
                                    <FaArrowUpRightFromSquare size="12"/>
                                </Button>
                            </Row>
                        </InnerContent>
                    </ExpandedContent>
                </Row>)
            }
        </StyledContainer>
    )
}

export default ExpandingCont;