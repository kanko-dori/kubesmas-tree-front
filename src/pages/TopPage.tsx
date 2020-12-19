import React from 'react';
import {Clock} from "../components/Clock";
import {ShowState} from "../components/CurrentState";
import {Hexagon} from '../components/Hexagon';
import {RadioInput} from "../components/RadioInput";
import {interval, wsEndpoint} from '../constants';
import {TopPageHandler} from "../containers/TopPageContainer";
import './TopPage.css';
import {Calendar} from '../components/Calendar';
import {socket} from "../socket";

interface OwnProps {
    inputValue: string,
    selectedValue: number,
    clickCount: number,
    connected: boolean,
    pods: number,
    //現在のイルミネーションパターンと思われ
    pattern: number,
    //各イルミネーションの統計
    patterns: number[],

}

type Props = OwnProps & TopPageHandler

//const socket = new WebSocket(wsEndpoint);

export class TopPage extends React.Component<Props> {
    componentWillMount() {
        // socket.onopen = this.props.handleTest

    }

    componentDidMount() {
        //初回アップデート
        setInterval(this.props.handleGetCurrentState, interval)
    }

    render() {
        return (
            <div className="TopPage">
                <h1 className="TopPage-title">
                    <p>kubesmas</p>
                    <p>tree</p>
                </h1>
                <Hexagon size={25} top={2.5} left={40}>
                    <Calendar/>
                </Hexagon>
                <Hexagon size={25} top={2.5} left={40}>
                    <Clock/>
                </Hexagon>
                <RadioInput
                    selectedValue={this.props.selectedValue}
                    onChangeValue={this.props.handleOnSelectValue}
                />
                <Hexagon size={25} top={25} left={1}>
                    <ShowState
                        selectedValue={this.props.selectedValue}
                        connected={this.props.connected}
                        clickCount={this.props.clickCount}
                    />
                </Hexagon>
            </div>
        )
    }
}
