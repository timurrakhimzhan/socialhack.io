import styled from "styled-components";
import React from 'react';
import {categories, categoriesTranslation} from "../appeals/appealsData";
import {HorizontalSpace} from "../templates";
import {useDispatch} from "react-redux";
import {setAppealCategory} from "../state/actions/actions";
import {useHistory} from "react-router-dom";

const CategoryStatsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
`;

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

const Link = styled.p`
    :hover {
        color: gray;
        cursor: pointer;
    }
`;
const Option = styled.option``;

function CategoryStats() {
    const history = useHistory();
    const dispatch = useDispatch();
    return <CategoryStatsWrapper>
        <Row>
            <Wrapper>
                <p>Выберите категорию: </p>
                <HorizontalSpace width={"30px"}/>
                <Select onChange={(event) => dispatch(setAppealCategory(event.target.value))}>
                    <Option value={"all"}>Все</Option>
                    {categories.map((value, index) =>
                        <Option key={index + 1} value={value}>{categoriesTranslation[value]}</Option>
                    )}
                </Select>
            </Wrapper>
            <Wrapper>
                <Link onClick={() => history.push("/appealDetails")}>Детализация жалоб</Link>
            </Wrapper>
        </Row>
    </CategoryStatsWrapper>
}

export default CategoryStats;