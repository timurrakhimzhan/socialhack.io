import React,{useState, useEffect} from 'react';
import styled from "styled-components";
import Appeal from "./appeal";
import {VerticalSpace} from "../templates";
import {appeals, featureMap} from "./appealsData";
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

const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: flex-start;
    font-size: 0.7em;
`;



function Appeals() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [increaseOrder, setIncreaseOrder] = useState(false);
    const [sortColumn, setSortColumn] = useState("rating");

    return<AppealsWrapper>
            <VerticalSpace height={"20px"}/>
            <Row>
                <p>Отсортировано по {increaseOrder ? "возрастанию" : "убыванию"} {featureMap[sortColumn]}</p>
            </Row>
            <VerticalSpace height={"20px"}/>
            <Appeal header
                    setSortColumn={(value:string) => {
                        if(value === sortColumn) {
                            setIncreaseOrder(!increaseOrder);
                        } else {
                            setSortColumn(value);
                            setIncreaseOrder(false);
                        }
                    }}
                    />
            {appeals.map((appealElem) => ({...appealElem, rating: 0.7 * appealElem.appealsNumber + 0.5 * appealElem.districtFitness}))
                .sort((appealA, appealB) => rate(appealA, appealB, sortColumn, increaseOrder))
                .map(({appealsNumber,name, districtFitness, rating}, index) =>
                <Appeal key={index}
                        index={index + 1}
                        name={name}
                        appealsNumber={appealsNumber}
                        districtFitness={districtFitness}
                        rating={rating}
                        onClick={() => {
                            dispatch(setAppealAction({name, appealsNumber, districtFitness}));
                            history.push("/appealStats");
                        }}
                />
            )}
        </AppealsWrapper>
}


export default Appeals;