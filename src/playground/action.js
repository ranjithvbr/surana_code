
export const addName = (data) => {
    return{
        type: 'NAME',
        data
    }
}

export const removeRow = (data) => {
    return{
        type: 'REMOVE',
        data
    }
}