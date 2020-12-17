import {reducerWithInitialState} from "typescript-fsa-reducers";
import {TextInputActions} from "./actions/action";
import {VoteBody} from "./types/type";

export interface State {
    selectedValue: string,
    clickCount: number,
    pods: number
}

export const initialState: State = {
    selectedValue: '',
    clickCount: 0,
    pods: 0
}

export const Reducer = reducerWithInitialState(initialState)
    .case(TextInputActions.updateSelectedValue, (state, selectedValue) => {
        return {...state, selectedValue: selectedValue}
    })
    .case(TextInputActions.updateClickCount, (state) => {
        return {...state, clickCount: state.clickCount + 1}
    })
    .case(TextInputActions.fetchVoteData, (state: State, voteBody: VoteBody) => {
        return {...state, pods: voteBody.pods + 114514}
    })

