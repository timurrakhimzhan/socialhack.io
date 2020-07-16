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
    }` : ''};
`;

const TextWrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

function Appeal({index, name, appealsNumber, districtFitness, header, onClick}: AppealProps) {
    return <AppealWrapper header={header} onClick={onClick}>
    <TextWrapper>{!header ? index : `№`}</TextWrapper>
    <TextWrapper>{!header ? name : `Название объекта`}</TextWrapper>
    <TextWrapper>{!header ? appealsNumber : `Число жалоб`}</TextWrapper>
    <TextWrapper>{!header ? districtFitness + "%" : `Приспособленность района`}</TextWrapper>
    </AppealWrapper>
}

export default Appeal;

Appeal.propTypes = {
    index: PropTypes.number,
    name: PropTypes.string,
    appealsNumber: PropTypes.number,
    districtFitness: PropTypes.number,
    header: PropTypes.bool,
    onClick: PropTypes.func
};

interface AppealProps {
    index?: number,
    name?: string,
    appealsNumber?: number,
    districtFitness?: number,
    header?: boolean,
    onClick?: any,
    onAppealsClick?: any,
    onDistrictClick?: any,
}