import React from 'react';
import styled from "styled-components";

const StatisticsWrapper = styled.div`
    background-color: #dddddd;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Row = styled.div`
    display: flex;
    width: 100%
`;

function Statistics() {
    return <StatisticsWrapper>
        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d80119.92686973949!2d71.4194411!3d51.1315614!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skz!4v1595035245955!5m2!1sru!2skz" width="600" height="450"></iframe>
    </StatisticsWrapper>
}

export default Statistics;