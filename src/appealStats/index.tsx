import styled from "styled-components";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {StateI} from "../state/reducers";
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import AllStats from "./allStats";
import {setAppealDescription, setAppealStatDataAction} from "../state/actions/actions";
import {randomize} from "./randomAppeals";
import CategoryStats from "./categoryStats";
import {Divider, VerticalSpace} from "../templates";
import {randomizeDescription} from "../appealDetails/randomize";

am4core.useTheme(am4themes_animated);


const AppealStatsWrapper = styled.div`
    display: flex;
    height: 90vh;
    background-color: #dddddd;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
`;


function AppealStats() {
    const state =  useSelector((state: StateI) => state.appeals.appeal);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setAppealStatDataAction(randomize("2020-04-01", "2020-04-30", state.appealsNumber)));
        dispatch(setAppealDescription(randomizeDescription(state.appealsNumber)));
    });
    return <AppealStatsWrapper>
        <AllStats/>
        <VerticalSpace height={"50px"} />
        <Divider width={"90%"}/>
        <VerticalSpace height={"50px"} />
        <CategoryStats/>
        </AppealStatsWrapper>
}

export default AppealStats;