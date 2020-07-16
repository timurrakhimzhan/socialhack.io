import styled from 'styled-components';

interface SpaceProps {
    width?: string,
    height?: string
}

export const HorizontalSpace = styled.div`
   width: ${({width}: SpaceProps) => width || "0"};
`;

export const VerticalSpace = styled.div`
   height: ${({height}: SpaceProps) => height || "0"};
`;