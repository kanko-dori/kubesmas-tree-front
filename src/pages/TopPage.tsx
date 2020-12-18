import React from 'react'
import {RadioInput} from "../components/RadioInput";
import {SubmitButton} from "../components/SubmitButton";
import {ShowState} from "../components/CurrentState";
import {TopPageHandler} from "../containers/TopPageContainer";
import {VoteStatus} from "../components/VoteStatus";
import {GetBody} from "../types/type";

interface OwnProps {
    inputValue: string,
    selectedValue: string,
    clickCount: number,
    connected: boolean,
    pods: number,
    //現在のイルミネーションパターンと思われ
    pattern: number,
    //各イルミネーションの統計
    patterns: number[],
}

type Props = OwnProps & TopPageHandler

const socket = new WebSocket('ws://20.194.207.252/ws');

export class TopPage extends React.Component<Props> {
    componentWillMount() {
        // socket.onopen = this.props.handleTest
        socket.onopen = function (ev) {
            console.log("Success")
        }
        socket.onerror = function (ev) {
            console.log("Error")
        }
        socket.onclose = function (ev) {
            console.log(ev.code)
        }
        socket.onmessage = function (ev) {
            console.log(ev.data)
        }
    }

    componentWillUnmount() {
        socket.close()
    }

    render() {
        return (
            <React.Fragment>
                <RadioInput title='ラジオ' selectedValue={this.props.selectedValue}
                            onChangeValue={this.props.handleOnSelectValue}/>
                {/*<SubmitButton title='Click me' onClick={this.props.handleOnClick}/>*/}
                <SubmitButton title='test' onClick={this.props.handleGetCurrentState}/>
                <ShowState selectedValue={this.props.selectedValue} connected={this.props.connected}
                           clickCount={this.props.clickCount}/>
                <VoteStatus pods={this.props.pods} pattern={this.props.pattern} patterns={this.props.patterns}/>
            </React.Fragment>
        )
    }
}
