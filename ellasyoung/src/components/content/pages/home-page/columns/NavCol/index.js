import React, { useState, useEffect } from 'react';
import {ButtonRow, NavCont, NavLinks, NavColWrapper} from "./NavColElements";

import Container from "../../../../../common/Container";
import Button from "../../../../../common/Button";
import Text from "../../../../../common/text/Text"
import Title from "../../../../../common/text/Title";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const links = [
    {name: "hero"},
    {name: "about"},
    {name: "experience"},
    {name: "projects"},
    {name: "contact"}
];

const NavCol = () => {

    const [activeSection, setActiveSection] = useState('hero');

    const navLinkOnClick = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const externalLinkOnClick = (url) => {
        window.open(url, '_blank');
    }

    useEffect(() => {
        const handleScroll = () => {
            const sections = links.map(link => document.getElementById(link.name)).filter(Boolean);
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section.offsetTop <= scrollPosition) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <NavColWrapper>
            <Container 
                width="230px"
                height="92vh"
                minHeight="530px"
                margin="35px 35px 35px 0"
                position="fixed"
                zIndex="1000"
            >
                <NavCont>
                    <Title
                        margin="0 0 35px 0"
                        fontSize="90px"
                        cursor="pointer"
                        onClick={() => navLinkOnClick(links[0].name)}
                    >
                        ey
                    </Title>
                    <NavLinks>
                        {links.map((link, index) => index !== 0 && (
                            <Button
                                key={index}
                                width="70%"
                                height="40px"
                                margin="0 0 25px 0"
                                justifyContent="flex-start"
                                onClick={() => navLinkOnClick(link.name)}
                                isActive={activeSection === link.name}
                            >
                                <Text
                                    spacing="2px"
                                    margin="0 0 0 20px"
                                    fontWeight="bold">
                                    {link.name}
                                </Text>
                            </Button>
                        ))}
                    </NavLinks>
                    <ButtonRow>
                        <Button
                            height="40px"
                            width="40px"
                            margin="0 20px 0 0"
                            onClick={() => externalLinkOnClick("https://github.com/ellasyoung")}
                        >
                            <FaGithub size="22"/>
                        </Button>
                        <Button
                            height="40px"
                            width="40px"
                            onClick={() => externalLinkOnClick("https://linkedin.com/in/ellasyoung")}
                        >
                            <FaLinkedinIn size="20"/>
                        </Button>
                    </ButtonRow>
                </NavCont>
            </Container>
        </NavColWrapper>
    );
};

export default NavCol;