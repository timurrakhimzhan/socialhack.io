import React from "react";
import styled from "styled-components";
import {HorizontalSpace} from "../templates";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

function Checker({label, func}: CheckerPropsI) {
    return <Wrapper>
        <p>{label}</p><HorizontalSpace width={"5px"}/><input type={"checkbox"} onChange={(event) => func(event.target.value)}/>
    </Wrapper>
}

interface CheckerPropsI {
    label: string,
    func: Function
}

export default Checker;