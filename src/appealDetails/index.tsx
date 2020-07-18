import React, {useState} from 'react';
import styled from "styled-components";
import AppealDetail from "./appealDetail";
import {HorizontalSpace, VerticalSpace} from "../templates";
import {useSelector} from "react-redux";
import {StateI} from "../state/reducers";
import {
    categories,
    categoriesColors,
    categoriesTranslation,
    statuses,
    statusesTranslations
} from "../appeals/appealsData";
import {rate} from "./sort";
import Square from "./square";
import CategoryInfo from "./categoryInfo";
import Selection from "./selection";
import Checker from "./checker";
import AppealProcessing from "../appealProcessing";
import Modal from "./modal";

const AppealDetailsWrapper = styled.div`
    display: flex;
    height: 90vh;
    background-color: #dddddd;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
`;

const AppealDetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;
    height: 100%;
`;

const Load = styled.p`
    font-size: 0.9em;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    align-items: center;
`;

const SelectionRow = styled(Row)`
    width: 90%;
    justify-content: space-between;
`;

const CheckerRow = styled(SelectionRow)`
    justify-content: flex-start;
`;

const Input = styled.input`
    height: 25px;
    width: 500px;
    border-radius: 3px;
`;

function AppealDetails() {
    const [pagination, setPagination] = useState(20);
    const [onlyNew, setOnlyNew] = useState(false);
    const [onlyUrgent, setOnlyUrgent] = useState(false);
    const [category, setCategory] = useState("all");
    const [status, setStatus] = useState("all");
    const [modalOpened, setModalOpened] = useState(false);
    const [searchWord, setSearchWord] = useState("");


    const description = useSelector((state: StateI) => state.appeals.description);
    return <AppealDetailsWrapper>
        <Row>
            <VerticalSpace height={"20px"}/>
        </Row>
        <CategoryInfo/>
        <Row>
            <VerticalSpace height={"10px"}/>
        </Row>
        <CheckerRow>
            <p>Поиск по слову:</p> <HorizontalSpace width={"20px"}/>
            <Input type={"search"} value={searchWord} onChange={(e) => setSearchWord(e.target.value)}/>
        </CheckerRow>
        <Row>
            <VerticalSpace height={"30px"}/>
        </Row>
        <SelectionRow>
            <Selection options={categories}
                       mapper={categoriesTranslation}
                       func={(value: any) => setCategory(value)}
                       label={"Выберите категорию: "} all/>
            <Selection options={statuses}
                       mapper={statusesTranslations}
                       func={(value: any) => setStatus(value)}
                       label={"Выберите статус: "} all/>
        </SelectionRow>
        <Row>
            <VerticalSpace height={"20px"}/>
        </Row>
        <CheckerRow>
            <Checker label={"Показать только новые"} func={(value: any) => setOnlyNew(!onlyNew)}/>
            <HorizontalSpace width={"30px"}/>
            <Checker label={"Показать только срочные"} func={(value: any) => setOnlyUrgent(!onlyUrgent)}/>
        </CheckerRow>
        <Row>
            <VerticalSpace height={"30px"}/>
        </Row>
        <AppealDetailsContainer>
            {description.filter((elem) => elem.description.includes(searchWord))
                .filter((elem) => category === "all" ? true : elem.category === category)
                .filter(elem => status === "all" ? true : elem.status === status)
                .filter(elem => onlyUrgent ? elem.urgent : true)
                .filter(elem => onlyNew ? elem.date > "2020-04-27" : true)
                .sort((elem1, elem2) => rate(elem1, elem2)).slice(0, pagination).map((elem) =>
                <AppealDetail date={elem.date}
                              description={elem.description}
                              color={categoriesColors[elem.category]}
                              urgent={elem.urgent}
                              status={elem.status}
                              onClick={() => setModalOpened(true)}
                />)}
            {description.length > pagination ?
                <Row>
                    <Load onClick={() => setPagination(pagination + 20)}>Загрузить еще...</Load>
                </Row>
                : null}
        </AppealDetailsContainer>
        {modalOpened ? <Modal onClose={() => setModalOpened(false)}>
            <AppealProcessing onClick={() => setModalOpened(false)}/>
        </Modal> : null}
    </AppealDetailsWrapper>
}

export default AppealDetails;