import React from 'react'
import {GetBody} from "../types/type";


//Todo バッドコードな気がする
interface OwnProps {
    pods: number
}

type Props = OwnProps

export const VoteStatus: React.FC<Props> = props => {
    return (
        <div>
            <label>[Vote]</label>
            <div>{props.pods}</div>
        </div>
    )
}