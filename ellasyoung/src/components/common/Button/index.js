import React from 'react';
import { Button as StyledButton } from './ButtonElements';

const Button = ({ width, height, borderRadius, margin, padding, children, justifyContent, onClick, ...props }) => {

    return (
        <StyledButton
            tabIndex="0"
            width={width}
            height={height}
            borderRadius={borderRadius}
            margin={margin}
            padding={padding}
            justifyContent={justifyContent}
            onClick={onClick}
            {...props}
        >
            {children}
        </StyledButton>
    );
}

export default Button;