import {HorizontalSpace} from "../templates";
import React from "react";
import styled from "styled-components";

const Select = styled.select`
    height: 50px;
    border-radius: 10px;
    border: 0;
    border: 0.5px solid black;
    background-color: white;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const Option = styled.option``;


function Selection({options, mapper, func, label, all}: SelectionPropsI) {
    return <Wrapper>
        <p>{label}</p>
        <HorizontalSpace width={"20px"}/>
        <Select onChange={(event) => func(event.target.value)}>
            {all ? <Option value={"all"}>Все</Option> : null}
            {options.map((value, index) =>
                <Option key={index + 1} value={value}>{mapper[value]}</Option>
            )}
        </Select>
    </Wrapper>
}

interface SelectionPropsI {
    options: Array<any>,
    mapper: any,
    func: Function,
    label: string,
    all?: boolean
}

export default Selection;