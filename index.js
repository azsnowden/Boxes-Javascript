console.log('Boxes!')
console.log('*********');


const boxContainer = document.querySelector('.box-container');
const boxes = document.querySelectorAll('.box');
const mainCall = document.querySelector("button")

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

//Event Listener
mainCall.addEventListener("click", function(e){
    e.preventDefault();
    const el = document.createElement('div');
    var xBox = document.getElementById("xvalue").value;
    var yBox = document.getElementById("yvalue").value;
    const listOfColors = document.getElementById("listOfColors");
    console.log(listOfColors)
    const userColors = listOfColors.value;
    console.log(userColors)
    //store coordinates in variable
    
    if(xBox < 350 && yBox < 400 &&xBox >= 1 && yBox >= 1){
    console.log(xBox);
    console.log(yBox);
    boxContainer.appendChild(el);
    el.classList.add('box');
    el.style.bottom = `${xBox}px`;
    el.style.left = `${yBox}px`;
    el.style.backgroundColor = `${userColors}`;
    }
    else{
        xBox = Math.floor(Math.random() * (200) + 1)
        yBox = Math.floor(Math.random() * (200) + 1)
        console.log(Math.floor(Math.random() * (200) + 1))
        boxContainer.appendChild(el);
    el.classList.add('box');
    el.style.bottom = `${xBox}px`;
    el.style.left = `${yBox}px`;
    el.style.backgroundColor = `${getRandomColor()}`;
    }

    //Event Listener #2, click on box to remove
    el.addEventListener("click", function(e) {
        boxContainer.removeChild(e.target);
    });
        
    el.addEventListener("mouseover", function (i){
        el.style.left = `${Math.floor(Math.random() * (200) + 1)}px`
        el.style.top = `${Math.floor(Math.random() * (200) + 1)}px`
        console.log(Math.floor(Math.random() * (200) + 1))
    })
    /*el.addEventListener("mouseover", function getRandom(xBox,yBox) {
        xBox = Math.random();
        yBox = Math.random();
        boxContainer.appendChild(el);
        el.classList.add('box');
    });*/
});


//function taking coordinates and placing box there


//store coordinates in variable

//place box at coordinates within container



/*
loop through each box
boxes.forEach( (box) => {
    //add an event listener that fires on click
    box.addEventListener('click', (e) => {
        const currentBG = e.target.style.backgroundColor = 'orange';
        e.target.style.backgroundColor = 
        (currentBG === 'orange') ? '#bada55':'orange'
        (currentBG === '#bad') ? 'orange' : 'violet'        
    });
    //change background color
});
console.log("afdadf")
*/

/**********************************
 * Add a form for the user to input an x and a y coordinate
 * and when the user clicks an "Add Box", it will add a new
 * "box" element to the page at that x/y coordinate INSIDE
 * THE BOX CONTAINER.
 * 
 * The HTML file is linked to both the CSS file and 
 * this JS file.
 * 
 * Have fun!
 ***********************************/
