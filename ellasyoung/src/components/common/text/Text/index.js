import React from 'react';
import { StyledText } from "./TextElements";

const Text = ({ fontSize, fontWeight, spacing, textDecoration, margin, padding, children, ...props }) => {

    return (
        <StyledText
            fontSize={fontSize}
            fontWeight={fontWeight}
            spacing={spacing}
            textDecoration={textDecoration}
            margin={margin}
            padding={padding}
            {...props}
        >
            {children}
        </StyledText>
    );
}

export default Text;