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
export const Divider = styled.div`
    height: 1px;
    width: ${({width}: SpaceProps) => width ? width : "100%"};
    background-color: ${({color}) => color ? color : "black"};
`;