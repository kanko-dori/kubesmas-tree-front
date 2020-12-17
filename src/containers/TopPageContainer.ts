// eslint-disable-next-line @typescript-eslint/no-unused-vars
import store, {AppState} from "../stores/store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {TopPage} from "../pages/TopPage";
import {TextInputActions} from "../actions/action";
import {socket} from "../socket";
import {GetBody, VoteCallbackBody} from "../types/type";

export interface TopPageHandler {
    handleOnSelectValue(value: string): void

    handleGetCurrentState(): void

    handleOnClick(): void
}

const mapStateToProps = (appState: AppState) => {
    return {
        selectedValue: appState.state.selectedValue,
        clickCount: appState.state.clickCount,
        connected: appState.socket.connected,
        pods: appState.state.pods,
        pattern: appState.state.pattern,
        patterns: appState.state.patterns
    }
}


const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        handleOnSelectValue: (value: string) => {
            console.log(`{"action":"VOTE","pattern":"${value}","uid":"AABBCCEE"}`)
            socket.send(`{"action":"VOTE","pattern":${value},"uid":"AABBCCEE"}`)
            socket.onmessage = function (e) {
                const data: VoteCallbackBody = JSON.parse(e.data)
                //投票結果のイベント発火
                dispatch(TextInputActions.fetchVoteData(data.currentData))
                // console.log(data.currentData)
                //投票結果のレスポンスのイベント発火
                dispatch(TextInputActions.updateSelectedValue(data.response))
            }
        },
        handleOnClick: () => {
            dispatch(TextInputActions.updateClickCount())
        },
        handleGetCurrentState: () => {
            socket.send("{\"action\":\"GET\"}")
            socket.onmessage = function (e) {
                //Todo ここにロジック入れてるんですがよろしいんでしょうか？
                const data: GetBody = JSON.parse(e.data);
                //console.log(data)
                dispatch(TextInputActions.fetchVoteData(data))
                //console.log(data.illuminationData.pattern1)
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopPage)