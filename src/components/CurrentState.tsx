import React from 'react'

interface OwnProps {
    selectedValue: string,
    clickCount: number,
    connected: boolean
}

type Props = OwnProps

export const ShowState: React.FC<Props> = props => {
    return (
        <div>
            <label>[states]</label>
            <div>{props.selectedValue}</div>
            <div>{props.clickCount}</div>
            <div>{props.connected}</div>
        </div>
    )
}