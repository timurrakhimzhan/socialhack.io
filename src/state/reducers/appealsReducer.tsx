import {
    SET_APPEAL,
    SET_APPEAL_DESCRIPTION,
    SET_APPEAL_STAT_CATEGORY,
    SET_APPEAL_STAT_DATA
} from "../actions/actionTypes";
import {AppealsState} from "./index";

const initialState: AppealsState = {
    appeal: {name: "", appealsNumber: 0, districtFitness: 0},
    statsData: [],
    category: "all",
    description: []
};

export default function appealsReducer(state = initialState, action: {payload: any, type: string}) {
    switch(action.type) {
        case SET_APPEAL:
            return {...state, appeal: action.payload};
        case SET_APPEAL_STAT_DATA:
            return {...state, statsData: action.payload};
        case SET_APPEAL_STAT_CATEGORY:
            return {...state, category: action.payload};
        case SET_APPEAL_DESCRIPTION:
            return {...state, description: action.payload};
        default:
            return state;
    }
}