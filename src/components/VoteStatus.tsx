import React from 'react'

interface OwnProps {
    pods: number,
    //現在のイルミネーションパターンと思われ
    pattern: number,
    //各イルミネーションの統計
    patterns: number[],
}

type Props = OwnProps

export const VoteStatus: React.FC<Props> = props => {
    return (
        <div>
            <label>[Vote]</label>
            <div>{`現在のPodの数：${props.pods}`}</div>
            <div>{`現在のパターン：${props.pattern}`}</div>
        </div>
    )
}