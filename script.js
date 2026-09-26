// Initialization

let pixels = 16;
let sizeBtn = document.querySelector("#btn");



// Asks user for number of grids/button

function askUser(){
    pixels = prompt("Enter number of pixels per side:");
    removePixels();
    createPixels();
    firingUp();
}

sizeBtn.addEventListener("click", ()=>{
    askUser();
})

// Create divs/pixels

function createPixels(){
    const container = document.querySelector("#container");
    for(i=0;i<pixels;i++){
        let createContainer = document.createElement('div');
        for(j=0;j<pixels;j++){
            
            let createDivs = document.createElement('div');
            createContainer.setAttribute('class', 'containers');
            createDivs.setAttribute('class', 'divs');
            createContainer.appendChild(createDivs);
            container.appendChild(createContainer);
            
        }
       
    }
    
} 

//reset pixels

function removePixels(){
    const childContainers = document.querySelectorAll('.containers');
    const numRows = childContainers.length;
    for(i=0;i<numRows;i++){
        childContainers[i].remove();
    }
}


// fire every pixel when mouse hovers

function firingUp(){
    
    let singleDiv = document.querySelectorAll('.divs');
    let totalPixels = singleDiv.length;
    console.log(totalPixels);

    for(i=0;i<totalPixels;i++){

        singleDiv[i].addEventListener("mouseout", (event) => {
            event.target.style.backgroundColor = "purple";
        })

        singleDiv[i].addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "lightblue";
        })

    }
}



//calling globally/executing
createPixels();
firingUp();


