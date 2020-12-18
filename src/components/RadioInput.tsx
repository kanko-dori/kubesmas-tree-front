import React from 'react'

interface OwnProps {
    title: string,
    selectedValue: string,
    onChangeValue: Function
}

type Props = OwnProps

export const RadioInput: React.FC<Props> = props => {
    return (
        <div>
            <span>{props.title}</span>
            <input type='radio' id='1' name='radio_group' value='0'
                   onChange={(e) => props.onChangeValue(e.target.value)}/><label>1</label>
            <input type='radio' id='2' name='radio_group' value='1'
                   onChange={(e) => props.onChangeValue(e.target.value)}/><label>2</label>
            <input type='radio' id='3' name='radio_group' value='2'
                   onChange={(e) => props.onChangeValue(e.target.value)}/><label>3</label>
            <input type='radio' id='3' name='radio_group' value='3'
                   onChange={(e) => props.onChangeValue(e.target.value)}/><label>3</label>

        </div>
    )
}