import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const AppealWrapper = styled.div `
    display: flex;
    width: 90%;
    ${({header}: AppealProps) => !header ? `background-color: #eeeeee;` : ''};
    min-height: 50px;
    margin-bottom: 5px;
    flex-direction: columns;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: padding-box;
    font-size: 0.8em;
    ${({header}: AppealProps) => header ? `font-weight: bold;` : ''};
    ${({header}: AppealProps) => !header ? `:hover {
        background-color: white;
        cursor: pointer;
    }` : ''};
`;

const TextWrapper = styled.div`
    flex: ${({flex}: TextWrapperPropsI) => flex ? flex : "1"};
    display: flex;
    align-items: center;
    ${({hover}: TextWrapperPropsI) => hover ? ":hover{color: gray; cursor: pointer;}" : ""}
    ${({left}: TextWrapperPropsI) => left ? "justify-content: flex-start;" : ""}
    ${({right}: TextWrapperPropsI) => right ? "justify-content: flex-end;" : ""}
    ${({right, left}: TextWrapperPropsI) => !left && !right ? "justify-content: center;" : ""}
`;

interface TextWrapperPropsI {
    left?: boolean,
    right?: boolean,
    hover?: boolean,
    flex?: number,
}

function Appeal({index, name, appealsNumber, districtFitness, rating, header, onClick, setSortColumn}: AppealProps) {
    return <AppealWrapper header={header} onClick={onClick}>
        <TextWrapper left>{!header ? index : `№`}</TextWrapper>
        <TextWrapper flex={3}>{!header ? name : `Название объекта`}</TextWrapper>
        <TextWrapper hover={header}
                     flex={3}
                     onClick={!header ? undefined : () => setSortColumn("appealsNumber")}>
            {!header ? appealsNumber : `Число жалоб`}
        </TextWrapper>
        <TextWrapper hover={header}
                     flex={3}
                     onClick={!header ? undefined : () => setSortColumn("districtFitness")}>
            {!header ? districtFitness + "%" : `Приспособленность района`}
        </TextWrapper>
        <TextWrapper hover={header}
                     flex={3}
                     onClick={!header ? undefined : () => setSortColumn("rating")}>
            {!header ? Math.floor(rating as number)  : `Рейтинг`}
        </TextWrapper>
    </AppealWrapper>
}

export default Appeal;

Appeal.propTypes = {
    index: PropTypes.number,
    name: PropTypes.string,
    appealsNumber: PropTypes.number,
    districtFitness: PropTypes.number,
    rating: PropTypes.number,
    header: PropTypes.bool,
    onClick: PropTypes.func,
    setSortColumn: PropTypes.func,
};

interface AppealProps {
    index?: number,
    name?: string,
    appealsNumber?: number,
    districtFitness?: number,
    header?: boolean,
    onClick?: any,
    setSortColumn?: any,
    onAppealsClick?: any,
    onDistrictClick?: any,
    rating?: number
}