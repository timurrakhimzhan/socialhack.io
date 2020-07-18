import {categories, categoriesColors, categoriesTranslation} from "../appeals/appealsData";
import Square from "./square";
import React from "react";
import styled from "styled-components";
import {HorizontalSpace} from "../templates";

const Row = styled.div`
    display: flex; 
    flex-direction: row;
    width: 90%;
    ${({left}: RowI) => left ? "justify-content: flex-start;" : ""}
    ${({right}: RowI) => right ? "justify-content: flex-end;" : ""}
    ${({right, left}: RowI) => !left && !right ? "justify-content: center;" : ""}
    align-items: center;
`;

interface RowI {
    left?: boolean,
    right?: boolean
}


const CategoryText = styled.p`
    font-size: 1em;
`;

function CategoryInfo() {

    return <Row>
        {categories.map((category, i) =>
            <Row left={i < categories.length / 2} right={i >= categories.length / 2} key={i + 1}><Square color={categoriesColors[category]}/>
            <HorizontalSpace width={"10px"}/>
            <CategoryText>{categoriesTranslation[category]}</CategoryText></Row>
        )}
    </Row>
}

export default CategoryInfo;