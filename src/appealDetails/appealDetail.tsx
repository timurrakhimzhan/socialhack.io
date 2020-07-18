import React from "react";
import styled from "styled-components";
import {HorizontalSpace} from "../templates";
import {faExclamationCircle} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {statusesColors, statusesTranslations} from "../appeals/appealsData";

const AppealDetailWrapper = styled.div `
    display: flex;
    width: 40%;
    min-height: 100px;
    max-height: 100px;
    height:100px;
    margin-bottom: 5px;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
    box-sizing: padding-box;
    align-items: center;
    font-size: 0.8em;
    background: rgba(${({r}: RGBI) => r}, ${({g}: RGBI) => g}, ${({b}: RGBI) => b}, 0.3);
    max-height: 100px;
    :hover {
        background: rgba(${({r}: RGBI) => r}, ${({g}: RGBI) => g}, ${({b}: RGBI) => b}, 0.6);
        cursor: pointer;
    }
`;

interface RGBI {
    r: number,
    g: number,
    b: number
}

const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    ${({flex}: {flex?: number}) => flex ? `flex: ${flex};` : ""}
`;

const Date = styled.p`
    font-size: 0.8em;
`;

const New = styled.p`
    font-size: 0.8em;
    color: red;
`;

const Information = styled.p`
    font-size: 1.1em;
`

const Status = styled.p`
    font-size: 0.7em;
    color: ${({color} : {color: string}) => color};
`;

function hexToRgb(hex: string) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if(!result) {
        return {r: 0, g: 0, b: 0};
    }
    return  {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    };
}

function AppealDetail({date, description, color, urgent, status, onClick}: AppealDetailPropsI) {
    const rgb: RGBI = hexToRgb(color);

    return <AppealDetailWrapper r={rgb.r} g={rgb.g} b={rgb.b}
                                onClick={() => onClick()}>
        <Row>
            <Wrapper flex={4}>
                <Date>{date} </Date>
                <HorizontalSpace width={"10px"} />
                {date > "2020-04-27" ? <New>Новая</New> : null}
            </Wrapper>
            <Wrapper flex={1}>
                <Status color={statusesColors[status]}>{statusesTranslations[status]}</Status>
                <HorizontalSpace width={"10px"} />
                {urgent ? <FontAwesomeIcon icon={faExclamationCircle} color={"red"} /> : <FontAwesomeIcon icon={faExclamationCircle} color={"red"} style={{opacity: 0}} />}
            </Wrapper>

        </Row>
        <Row>
            <Information>{description[0].toUpperCase() + description.slice(1)}</Information>
        </Row>
    </AppealDetailWrapper>
}

export default AppealDetail;

interface AppealDetailPropsI {
    date: string,
    description: string,
    color: string,
    urgent: boolean,
    status: string,
    onClick: Function
}