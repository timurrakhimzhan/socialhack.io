import moment, {Moment} from "moment";
import {start} from "repl";
import {categories} from "../appeals/appealsData";

export interface AppealStats {
    category: string,
    date: string
}

export function linRegress(W: number, x: number) {
    let k = (W - 10) / 89;
    let b = 10 - k;
    return k * x + b;
}

export function randomize(startDate: string, endDate: string, appealsNumber: number): Array<AppealStats> {
    const startDateMoment: Moment = moment(startDate, "YYYY-MM-DD");
    const endDateMoment: Moment = moment(endDate, "YYYY-MM-DD");
    const duration: number = moment.duration(endDateMoment.diff(startDateMoment)).asDays();
    const appealsPerDay: number = appealsNumber / duration;
    let result: Array<AppealStats> = [];
    const date = moment(startDateMoment);
    while(true) {
        for(let i = 0; i < appealsPerDay; i++) {
            const categoryIndex = Math.floor(Math.random() * categories.length);
            const category = categories[categoryIndex];
            result.push({
                category,
                date: date.format("YYYY-MM-DD")
            });
        }
        if(endDateMoment.isBefore(date) || endDateMoment.isSame(date)) {
            break;
        }
        date.add(1, "day");
    }
    result = result.map((elem, i) => {
        if(withProbability(5)) {
            const index = Math.floor(Math.random() * (i + 1));
            elem.date = result[index].date;
        }
        return elem;
    });
    return result;
}

export function withProbability(probability: number): boolean {
    return Math.floor(Math.random() * 100 / probability) === 0;
}