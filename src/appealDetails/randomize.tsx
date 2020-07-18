import moment from "moment";
import {appealDescriptions, categories, statuses} from "../appeals/appealsData";
import {withProbability} from "../appealStats/randomAppeals";

export function randomizeDescription(total: number): Array<AppealDescriptionI> {
    const baseDate = moment("2020-04-15", "YYYY-MM-DD");
    const result: Array<AppealDescriptionI> = [];
    for(let i = 0; i < total; i++) {
        const category: string = categories[Math.floor(Math.random() * categories.length)];
        const description: string = appealDescriptions[category][Math.floor(Math.random() * appealDescriptions[category].length)];
        const date = moment(baseDate);
        date.add(Math.floor(Math.random() * 31) - 15, 'days');
        const urgent = withProbability(30);
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        result.push({category, description, date: date.format("YYYY-MM-DD"), urgent, status});
    }
    return result;
}

export interface AppealDescriptionI {
    category: string,
    description: string,
    date: string,
    urgent: boolean,
    status: string
}