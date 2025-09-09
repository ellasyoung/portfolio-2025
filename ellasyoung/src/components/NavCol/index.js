import {Column, Logo, NavCont, NavLink, NavLinkCont, NavLinks} from "./NavColElements";
const NavCol = () => {
    return (
        <Column>
            <NavCont>
                <Logo href="#">ey</Logo>
                <NavLinks>
                    <NavLinkCont tabIndex="0">
                        <NavLink href="#">about</NavLink>
                    </NavLinkCont>
                    <NavLinkCont tabIndex="0">
                        <NavLink href="#">experience</NavLink>
                    </NavLinkCont>
                    <NavLinkCont tabIndex="0">
                        <NavLink href="#">projects</NavLink>
                    </NavLinkCont>
                    <NavLinkCont tabIndex="0">
                        <NavLink href="#">design</NavLink>
                    </NavLinkCont>
                </NavLinks>
            </NavCont>
        </Column>
    );
};

export default NavCol;