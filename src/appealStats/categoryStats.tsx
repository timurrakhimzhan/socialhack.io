import styled from "styled-components";
import React from 'react';
import {categories, categoriesTranslation} from "../appeals/appealsData";
import {HorizontalSpace} from "../templates";
import {useDispatch} from "react-redux";
import {setAppealCategory} from "../state/actions/actions";

const CategoryStatsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

const Select = styled.select`
    height: 50px;
    border-radius: 10px;
    border: 0;
    border: 0.5px solid black;
    background-color: white;
`;
const Option = styled.option``;

function CategoryStats() {
    const dispatch = useDispatch();
    return <CategoryStatsWrapper>
        <Row>
            <p>Выберите категорию: </p>
            <HorizontalSpace width={"30px"}/>
            <Select onChange={(event) => dispatch(setAppealCategory(event.target.value))}>
                <Option value={"all"}>Все</Option>
                {categories.map((value, index) =>
                    <Option key={index + 1} value={value}>{categoriesTranslation[value]}</Option>
                )}
            </Select>
        </Row>
    </CategoryStatsWrapper>
}

export default CategoryStats;