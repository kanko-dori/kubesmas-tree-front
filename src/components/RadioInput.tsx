import React from 'react';
import './RadioInput.css';
import { Hexagon } from './Hexagon';

interface OwnProps {
    selectedValue: number,
    onChangeValue: Function
}

type Props = OwnProps

export const RadioInput: React.FC<Props> = props => {
    return (
        <div className="RadioInput">
            <h3 className="RadioInput-title">
                <p>lighting</p>
                <p>Vote</p>
            </h3>
            <Hexagon size={18} top={16} left={0}>
                <label className="RadioInput-label">
                    <input
                        type='radio'
                        className="RadioInput-input"
                        name='radio_group'
                        value='1'
                        onChange={(e) => props.onChangeValue(e.target.value)}
                    />
                    <span className="RadioInput-pattern-name">stAtic</span>
                </label>
            </Hexagon>
            <Hexagon size={18} top={0} left={28}>
                <label className="RadioInput-label">
                    <input
                        type='radio'
                        className="RadioInput-input"
                        name='radio_group'
                        value='2'
                        onChange={(e) => props.onChangeValue(e.target.value)}
                    />
                    <span className="RadioInput-pattern-name">Wave</span>
                </label>
            </Hexagon>
            <Hexagon size={18} top={16} left={28*2}>
                <label className="RadioInput-label">
                    <input
                        type='radio'
                        className="RadioInput-input"
                        name='radio_group'
                        value='3'
                        onChange={(e) => props.onChangeValue(e.target.value)}
                    />
                    <span className="RadioInput-pattern-name">Rainbow</span>
                </label>
            </Hexagon>
        </div>
    )
}