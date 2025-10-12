import React, { useState, useEffect } from 'react';
import { NavCont, NavLinks } from "./NavColElements";

import Container from "../../../../../common/Container";
import Button from "../../../../../common/Button";
import Text from "../../../../../common/text/Text"
import Title from "../../../../../common/text/Title";

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
            <Container 
                width="16%"
                minWidth="180px"
                height="92vh"
                minHeight="450px"
                margin="35px"
                position="fixed"
                zIndex="1000"
            >
                <NavCont>
                    <Title
                        margin="0 0 35px 55px"
                        fontSize="90px"
                        cursor="pointer"
                        onClick={() => navLinkOnClick(links[0].name)}
                    >
                        ey
                    </Title>
                    <NavLinks>
                        {links.map((link, index) => index != 0 && (
                            <Button
                                key={index}
                                width="70%"
                                height="40px"
                                margin="0 0 25px 0"
                                justifyContent="flex-start"
                                onClick={() => navLinkOnClick(link.name)}
                                isActive={activeSection === link.name}
                            >
                                <Text margin="0 0 0 20px">{link.name}</Text>
                            </Button>
                        ))}
                    </NavLinks>
                </NavCont>
            </Container>
    );
};

export default NavCol;