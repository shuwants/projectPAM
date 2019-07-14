// Select color input
const color = document.querySelector('#colorPicker').value;
console.log(color);

// Select size input
const height = document.querySelector('#inputHeight').value;
console.log(height);

const width = document.querySelector('#inputWidth').value;
console.log(width);


// When size is submitted by the user, call makeGrid()
// enter width and h;
// crick submit button
const mainHeading = document.querySelector('#sizePicker');

mainHeading.addEventListener('click', function(){
  console.log("Listen");
});


function makeGrid() {

// Your code goes here!
const gridHeight = 10;

const gridWidth = 10;
const grid =[];

for (var row = 0; row < gridHeight; row++){
  console.log("adding row to table");

  for (var col = 0; col < gridWidth; col++){
    console.log("adding col to table");
  }
}
}

makeGrid();
