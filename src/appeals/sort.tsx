
export function rate(appealA: any, appealB: any, column: string = "rating", increaseOrder: boolean = false) {
    if(!increaseOrder) {
        return appealA[column] - appealB[column]
    } else {
        return appealB[column] - appealA[column]
    }
}