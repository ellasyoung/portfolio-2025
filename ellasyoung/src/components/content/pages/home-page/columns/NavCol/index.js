import React from 'react';
import Container from "../../../../../common/Container";
import {Logo, NavCont, NavLinks} from "./NavColElements";
import Button from "../../../../../common/Button";
import Text from "../../../../../common/text/Text"

const links = [
    {name: "about", section: "#about"},
    {name: "experience", section: "#experience"},
    {name: "projects", section: "#projects"},
    {name: "contact", section: "#contact"}
];

const NavCol = () => {

    const navLinkOnClick = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
            <Container 
                width="16%"
                height="92vh"
                margin="35px"
                position="fixed"
                minHeight="450px"
                zIndex="1000"
            >
                <NavCont>
                    <Logo href="#">ey</Logo>
                    <NavLinks>
                        {links.map((link, index) => (
                            <Button
                                key={index}
                                width="70%"
                                height="40px"
                                margin="0 0 25px 0"
                                justifyContent="flex-start"
                                onClick={() => navLinkOnClick(link.section.substring(1))}
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