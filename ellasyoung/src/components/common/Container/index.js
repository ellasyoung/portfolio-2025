import React from 'react';
import { Container as StyledContainer } from './ContainerElements';

const Container = ({ width, height, minWidth, minHeight, borderRadius, margin, position, zIndex, children, onClick, ...props }) => {
    return (
        <StyledContainer
            width={width}
            minWidth={minWidth}
            height={height}
            minHeight={minHeight}
            borderRadius={borderRadius}
            margin={margin}
            position={position}
            zIndex={zIndex}
            onClick={onClick}
            {...props}
        >
            {children}
        </StyledContainer>
    );
}

export default Container;