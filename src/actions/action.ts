import actionCreatorFactory from "typescript-fsa";
import {VoteBody} from "../types/type";


const actionCreator = actionCreatorFactory()

export const TextInputActions = {
    //VOTE
    updateSelectedValue: actionCreator<string>('ACTION_UPDATE_SELECTED_VALUE'),
    updateClickCount: actionCreator('ACTION_UPDATE_CLICK_COUNT'),
    //GET
    fetchVoteData: actionCreator<VoteBody>('ACTION_FETCH_VOTE_DATA')
}