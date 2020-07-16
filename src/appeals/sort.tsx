import {AppealI} from "./appealsData";

export function rate(appealA: AppealI, appealB: AppealI, column?: string) {
    if(column === "appealsNumber" || column === "districtFitness") {
        return appealA[column] - appealB[column]
    } else {
        return 0.7 * appealB.appealsNumber + 0.5 * appealB.districtFitness - (0.7 * appealA.appealsNumber + 0.5 * appealA.districtFitness);
    }
}