import actionCreatorFactory from "typescript-fsa";
import {GetBody} from "../types/type";


const actionCreator = actionCreatorFactory()

export const TextInputActions = {
    //VOTE
    updateSelectedValue: actionCreator<string>('ACTION_UPDATE_SELECTED_VALUE'),
    updateClickCount: actionCreator('ACTION_UPDATE_CLICK_COUNT'),
    //GET
    fetchVoteData: actionCreator<GetBody>('ACTION_FETCH_VOTE_DATA')
}