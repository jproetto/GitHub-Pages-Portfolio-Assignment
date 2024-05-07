async function fetchData () {
    const response = await fetch("./index.json")
    const result = await response.json()
    console.log(result)

    buildGrid(result)
}

fetchData()

async function buildGrid(result) {

    let gridTree = ""
    // next three variables are included to create left and right margin on the grid (i.e. blank cells on the ends of each grid row of columns) //
    let numberOfColumns = 6
    let leftMarginIndex = 0 
    // need to subtract 1 immedietly below, because array index starts at 0, so the last column index is 5, not 6, in a 6 column row //
    let rightMarginIndex = numberOfColumns-1

    result.forEach((element,index)=>{
        //first thing the loop does is check if the cell is supposed to be a "margin cell" i.e. index 0 or 5 i.e. the left and right outtermost columns //
        // if it is one of those, insert a blank div i.e. create an empty grid cell i.e. create the left and right margin
        if(index % numberOfColumns == leftMarginIndex || index % numberOfColumns == rightMarginIndex) {
            gridTree += "<div class=grid-child></div>"
            return 
        } 
        
        // if not, proceed with normal instructions for each grid cell //
        // INLINE STYLES TIP: for whatever reason in-line styles need to be wrapped in quotes, even though the entire tree is already wrapped in back ticks //
        gridTree+=
        `
        <div class=grid-child style="background: url(${element.background}); background-size: cover"></div>
        `
    })
    console.log(gridTree)
    let gridContainer = document.getElementById("grid")
    gridContainer.innerHTML = gridTree

}