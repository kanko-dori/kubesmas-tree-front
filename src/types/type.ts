//
// interface VoteBody {
//     pods: number,
//     illuminationPattern: number,
//     illuminationData: illuminationData,
// }
//
// interface illuminationData {
//     pattern1: number,
//     pattern2: number,
//     pattern3: number,
//     pattern4: number,
// }

export interface VoteBody {
    pods: number,
    illuminationPattern: number,
    illuminationData: illuminationData,
}

interface illuminationData {
    pattern1: number,
    pattern2: number,
    pattern3: number,
    pattern4: number,
}
