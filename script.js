// Asks user for number of grids

const pixels = prompt("Enter number of pixels per side:");




// Create divs

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

 createPixels();

// fire every pixel when mouse hovers

let singleDiv = document.querySelectorAll('.divs');
const totalPixels = document.querySelectorAll('.divs').length;

for(i=0;i<totalPixels;i++){

    singleDiv[i].addEventListener("mouseout", (event) => {
        event.target.style.backgroundColor = "purple";
    })

    singleDiv[i].addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "lightblue";
    })


}




