import React from 'react';
import styled from "styled-components";
import Appeal from "./appeal";
import {VerticalSpace} from "../templates";
import {appeals} from "./appealsData";
import {rate} from "./sort";
import {useHistory} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {setAppealAction} from "../state/actions/actions";

const AppealsWrapper = styled.div`
    display: flex;
    height: 90vh;
    background-color: #dddddd;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
`;


function Appeals() {
    const history = useHistory();
    const dispatch = useDispatch();
    return<AppealsWrapper>
            <VerticalSpace height={"20px"}/>
            <Appeal header/>
            {appeals.sort((appealA, appealB) => rate(appealA, appealB))
                .map(({appealsNumber,name, districtFitness}, index) =>
                <Appeal key={index}
                        index={index + 1}
                        name={name}
                        appealsNumber={appealsNumber}
                        districtFitness={districtFitness}
                        onClick={() => {
                            dispatch(setAppealAction({name, appealsNumber, districtFitness}));
                            history.push("/appealStats");
                        }}
                />
            )}
        </AppealsWrapper>
}


export default Appeals;