import {Column, Logo, NavCont, NavLink, NavLinkCont} from "./NavColElements";
const NavCol = () => {
    return (
        <Column>
            <NavCont>
                <Logo href="#">ey</Logo>
                <NavLinkCont>
                    <NavLink href="#">about</NavLink>
                </NavLinkCont>
                <NavLinkCont>
                    <NavLink href="#">experience</NavLink>
                </NavLinkCont>
                <NavLinkCont>
                    <NavLink href="#">projects</NavLink>
                </NavLinkCont>
                <NavLinkCont>
                    <NavLink href="#">design</NavLink>
                </NavLinkCont>
            </NavCont>
        </Column>
    );
};

export default NavCol;