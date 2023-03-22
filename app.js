'use strict'

let productContainer = document.querySelector('section');
let resultButton = document.querySelector('section + div');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:nth-child(3)');

let votes = 0; //clicks

let maxVotesAllowed = 25; //max votes

let uniqueImageCount = 6 // To make sure I display every possible combination of 3 unique images, I need at least 6 so I can display 20 different combos w/out repeats. To meet the 25 max amount of clicks, each click shows a new combo of 3 images which means I can only show a max of 75 different combos. Since I can create 20 unique combos with 6 unique images, I should aim for 6.

const state = { //
    allProductsArray: [],
    indexArray: [],
};

//functional logic

function duckProduct(name, path) {
    this.name = name;
    this.path = path;
    this.timesImageViewed = 0;
    this.votes = 0;
}

function getRandomNumber() {
    return Math.floor(Math.random() * state.allProductsArray.length);
}

function renderProducts() {
    //call getRandomNumber function

    while (state.indexArray.length < uniqueImageCount) {
        let randomNumber = getRandomNumber();
        if (!state.indexArray.includes(randomNumber)) {
            state.indexArray.push(randomNumber);
        }
    }
    console.log(state.indexArray);

    let product1 = state.indexArray.shift();
    let product2 = state.indexArray.shift();
    let product3 = state.indexArray.shift();


   
    image1.src = state.allProductsArray[product1].path;
    image2.src = state.allProductsArray[product2].path;
    image3.src = state.allProductsArray[product3].path;

    image1.alt = state.allProductsArray[product1].name;
    image2.alt = state.allProductsArray[product2].name;
    image3.alt = state.allProductsArray[product3].name;

    state.allProductsArray[product1].timesImageViewed++;
    state.allProductsArray[product2].timesImageViewed++;
    state.allProductsArray[product3].timesImageViewed++;
    }


function checkIfProductIsClicked(event) {
    if (event.target === productContainer) {
        alert('Not an image, click an image');
    }
    votes++;

    let clickProduct = event.target.alt;
    for (let i = 0; i < state.allProductsArray.length; i++) {
        if (clickProduct === state.allProductsArray[i].name) {
            state.allProductsArray[i].votes++;
            break;
        }
    }

    if (votes === maxVotesAllowed) {
        productContainer.removeEventListener('click', checkIfProductIsClicked);
        productContainer.className = 'no-voting';
        printChart();
    } else {
        renderProducts();
    }
}

function printChart(){
    let productNames = [];
    let productVotes = [];
    let productViews = [];
    for(let i = 0; i < state.allProductsArray.length; i++){
        productNames.push(state.allProductsArray[i].name);
        productVotes.push(state.allProductsArray[i].votes);
        productViews.push(state.allProductsArray[i].timesImageViewed);
    }
    const data = {
        labels: productNames,
        datasets: [{
          label: 'Votes',
          data: productVotes,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)'
          ],
          borderWidth: 1
        },
        {
          label: 'Times Shown',
          data: productViews,
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgb(255, 159, 64)'
          ],
          borderWidth: 1
        }]
      };

      const config = { type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    };
    let canvasChart = document.getElementById('myChart');
    const myChart = new Chart(canvasChart, config);
      
}


//executable code

let bag = new duckProduct('bag', 'img/bag.jpg');
let banana = new duckProduct('banana', 'img/banana.jpg');
let bathroom = new duckProduct('bathroom', 'img/bathroom.jpg')
let boots = new duckProduct('boots', 'img/boots.jpg');
let breakfast = new duckProduct('breakfast', 'img/breakfast.jpg');
let bubblegum = new duckProduct('bubblegum', 'img/bubblegum.jpg');
let chair = new duckProduct('Chair', 'img/chair.jpg');
let cthulhu = new duckProduct('cthulhu', 'img/cthulhu.jpg');
let dogDuck = new duckProduct('dog-duck', 'img/dog-duck.jpg');
let dragon = new duckProduct('dragon', 'img/dragon.jpg');
let pen = new duckProduct('pen', 'img/pen.jpg');
let petSweep = new duckProduct('pet-sweep', 'img/pet-sweep.jpg');
let scissors = new duckProduct('scissors', 'img/scissors.jpg');
let shark = new duckProduct('shark', 'img/shark.jpg');
let sweep = new duckProduct('sweep', 'img/sweep.png');
let tauntaun = new duckProduct('tauntaun', 'img/tauntaun.jpg');

state.allProductsArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun);

renderProducts();

productContainer.addEventListener('click', checkIfProductIsClicked);
