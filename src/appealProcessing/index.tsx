import React from "react";
import styled from "styled-components";
import {HorizontalSpace, VerticalSpace} from "../templates";
import Selection from "../appealDetails/selection";
import {faces, facesTranslations, statuses, statusesTranslations} from "../appeals/appealsData";

const AppealProcessingWrapper = styled.div`
    display: flex;
    width: 90%;
    height: 100%;
    flex-direction: column;
`;

const Row = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    ${({center}: {center?: boolean}) => center ? "justify-content: center;" : ""}
`;

const Input = styled.input`
    height: 25px;
    width: 300px;
    border-radius: 3px;
`;

const Button = styled.button`
    width: 100px;
    :hover {
        cursor: pointer;
    }
`;

function AppealProcessing({onClick}: {onClick: Function}) {
    return <AppealProcessingWrapper>
        <VerticalSpace height={"20px"}/>
        <Row><p>Ответ от :</p> <HorizontalSpace width={"20px"}/><Input type={"search"}/></Row>
        <VerticalSpace height={"20px"}/>
        <Selection options={statuses} mapper={statusesTranslations} func={() => true} label={"Конечный статус: "} />
        <VerticalSpace height={"20px"}/>
        <Selection options={faces} mapper={facesTranslations} func={() => true} label={"Уполномоченные лица: "} />
        <VerticalSpace height={"20px"}/>
        <Row><p>Комментарий:</p>
            <HorizontalSpace width={"20px"}/>
            <textarea rows={5} cols={50}>Оставьте комментарий по жалобе</textarea>
        </Row>
        <VerticalSpace height={"20px"}/>
        <Row center><Button onClick={() => onClick()}>Отправить</Button></Row>
        <VerticalSpace height={"30px"}/>
    </AppealProcessingWrapper>
}

export default AppealProcessing;