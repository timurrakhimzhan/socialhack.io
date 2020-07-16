import {combineReducers} from 'redux';
import appealsReducer from "./appealsReducer";
import {AppealI} from "../../appeals/appealsData";
import {AppealStats} from "../../appealStats/randomAppeals";

export default combineReducers({appeals: appealsReducer})

export interface AppealsState {
    appeal: AppealI
    statsData: Array<AppealStats>,
    category: string
}

export interface StateI {
    appeals: AppealsState
}