    
async function fetchData () {

// 1. fetching data on each project from .json file to be used in cards created below //
const response = await fetch("./projects.json")
const result = await response.json()
console.log(result)

buildTiles(result)


};

fetchData() 

async function buildTiles (result) {
    // 2. building card html element tree to display projects in nice tiles with corresponding data for each project stored in .json file //
    
    console.log(result) 
    
    let elementTree = "<div class=section-container>"

    result.projects.forEach((element)=> {
        elementTree += 
            `
            <div class=investment-card>
                <div class=investment-header style="background: url(${element.img}); background-size: cover"></div>
                <div class=investment-name-container>
                    <div class=investment-name-pill>${element.name}</div>
                </div>
                <div class=investment-link>
                    <a href=${element.link}> Github Repository for <br> ${element.linkLabel} </a> 
                </div>
                <div class=additional-investment-info>${element.description}</div>
            </div>
            `
    })

    elementTree += "</div>"

    console.log(elementTree)

    // 3. pushing the element tree into the placeholder section of the html file below the nav bar (getting the placeholder html element by its id) to display the content for this page // 
    let projectsContent = document.getElementById("projectsContent")
    projectsContent.innerHTML = elementTree


}
