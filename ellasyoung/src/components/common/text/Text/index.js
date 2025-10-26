import React from 'react';
import { StyledText } from "./TextElements";

const Text = ({ fontSize, fontWeight, fontStyle, spacing, textDecoration, margin, padding, transform, children, ...props }) => {

    return (
        <StyledText
            fontSize={fontSize}
            fontWeight={fontWeight}
            fontStyle={fontStyle}
            spacing={spacing}
            textDecoration={textDecoration}
            margin={margin}
            padding={padding}
            transform={transform}
            {...props}
        >
            {children}
        </StyledText>
    );
}

export default Text;