import React from 'react';
import styled from "styled-components";

const SquareWrapper = styled.div`
    background: ${({color}: {color: string}) => color};
    width: 15px;
    height: 15px;
`;

function Square({color}: {color: string}) {
    return <SquareWrapper color={color}/>
}

export default Square;