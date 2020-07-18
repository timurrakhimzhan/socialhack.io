import {AppealDescriptionI} from "./randomize";

export function rate(descriptionA: AppealDescriptionI, descriptionB: AppealDescriptionI) {
    if(descriptionA.date === descriptionB.date) {
        return 0;
    }
    if(descriptionA.date > descriptionB.date) {
        return -1;
    }
    return 1;
}