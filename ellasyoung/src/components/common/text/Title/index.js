import React from 'react';
import { StyledTitle } from "./TitleElements";

const Text = ({ fontSize, fontWeight, textDecoration, margin, padding, children, cursor, onClick, ...props }) => {

    return (
        <StyledTitle
            fontSize={fontSize}
            fontWeight={fontWeight}
            textDecoration={textDecoration}
            margin={margin}
            padding={padding}
            cursor={cursor}
            onClick={onClick}
            {...props}
        >
            {children}
        </StyledTitle>
    );
}

export default Text;