export const flattenAndSort = (arr:number[][]) =>{
    const flatendAndSortedArray = arr.flat().sort((a,b)=>a-b)

    console.log('flattenAndSort result: ', flatendAndSortedArray)
}