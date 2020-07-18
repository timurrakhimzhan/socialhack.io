import {AppealI} from "../../appeals/appealsData";
import {SET_APPEAL, SET_APPEAL_DESCRIPTION, SET_APPEAL_STAT_CATEGORY, SET_APPEAL_STAT_DATA} from "./actionTypes";
import {AppealStats} from "../../appealStats/randomAppeals";
import {AppealDescriptionI} from "../../appealDetails/randomize";

export function setAppealAction(appeal: AppealI) {
    return {type: SET_APPEAL, payload: appeal}
}

export function setAppealStatDataAction(data: Array<AppealStats>) {
    return {type: SET_APPEAL_STAT_DATA, payload: data}
}

export function setAppealCategory(category: string) {
    return {type: SET_APPEAL_STAT_CATEGORY, payload: category};
}

export function setAppealDescription(description: Array<AppealDescriptionI>) {
    return {type: SET_APPEAL_DESCRIPTION, payload: description};
}