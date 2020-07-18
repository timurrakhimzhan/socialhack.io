import styled from "styled-components";
import React, {useLayoutEffect} from "react";
import {useSelector} from "react-redux";
import {StateI} from "../state/reducers";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import {VerticalSpace} from "../templates";
import {AppealStats} from "./randomAppeals";
import {categoriesColors} from "../appeals/appealsData";

const ChartWrapper = styled.div`
    height: 70%;
    width: 80%;
    
`;

function AllStats() {
    let data: Array<AppealStats> = useSelector((state: StateI) => state.appeals.statsData);
    const category = useSelector((state: StateI) => state.appeals.category);
    useLayoutEffect(() => {
        if(!data) {
            return;
        }
        let x = am4core.create("allchartdiv", am4charts.XYChart);
        let dataGraph: Array<AppealStats> = data.map((elem) => elem);
        if(category !== "all") {
            dataGraph = data.filter((elem) => elem.category === category);
        }

        const dataObject: {[key: string]: number} = {};
        for(let elem of dataGraph) {
            if (!dataObject[elem.date]) {
                dataObject[elem.date] = 1;
            } else {
                dataObject[elem.date]++;
            }
        }
        x.data = Object.keys(dataObject).map(key => ({date: key, value: dataObject[key]}));

        let dateAxis = x.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;
        dateAxis.title.text = "Дата";

        let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.minWidth = 35;
        valueAxis.title.text = "Количество жалоб";

        let series = x.series.push(new am4charts.ColumnSeries3D());
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "value";
        series.tooltipText = "{valueY.value}";
        series.columns.template.fill = am4core.color(categoriesColors[category]);

        x.cursor = new am4charts.XYCursor();

        let title = x.titles.create();
        title.text = `Статистика жалоб с 2020-04-01 по 2020-04-30`;
        title.fontSize = 25;
        title.marginBottom = 30;

        return () => {
            x.dispose();
        }
    }, [data, category]);

    return (<ChartWrapper>
        <VerticalSpace height={"20px"}/>
        <div id={"allchartdiv"} style={{width: "100%", height: "100%"}}/>
    </ChartWrapper>)
}

export default AllStats;