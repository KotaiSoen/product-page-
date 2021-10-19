// create a row 
// create a cell 
// set input = cell ()


const button = document.querySelectorAll('.add-to-cart');
const array1 = [];
const externalHard = 'hhha112#';
const camera = '2h#h3';
const wristWatch = 'dhsi#32';
const iconButton = document.querySelector('.newCell');
const tableItems = document.querySelector('#myTable');
var result = 0;

var products = [
    {
        "name": "Pulpy Orange",
        "price": 600,
        "code": "pulpy",
        "imgSrc": "./images/sony.jpeg"
    },
    {
        "name": "Pulpy Orange",
        "price": 600,
        "code": "pulpy",
        "imgSrc": "./images/sony.jpeg"
    },
    {
        "name": "Pulpy Orange",
        "price": 600,
        "code": "pulpy",
        "imgSrc": "./images/sony.jpeg"
    },
    {
        "name": "Pulpy Orange",
        "price": 600,
        "code": "pulpy",
        "imgSrc": "./images/sony.jpeg"
    },
    {
        "name": "Kotai's Pulpy",
        "price": 1000,
        "code": "kpulpy",
        "imgSrc": "./images/sony.jpeg"


    }
];

button.forEach((addButton) => {
    addButton.addEventListener('click', (event) => {
        event.preventDefault();
         var buttonBut = event.target;
         var buttonPar = buttonBut.parentElement.parentElement;
         var buttonItself = buttonPar.querySelector('input').value;
         var buttonItem = buttonPar.querySelector('.item').innerHTML;
         var moneyStuff = buttonPar.querySelector('.money').innerHTML;
        
         const table = document.getElementById('myTable');


         var tablesChildren = Array.from(table.children);

         
         for (let index = 0; index < tablesChildren.length; index++) {
             if(index != 0){
                const element = tablesChildren[index];
                console.log(element);
                var cellsOfThisRow = Array.from(element.cells);
                var nameOfThisProduct = cellsOfThisRow[0].innerHTML;

                if(nameOfThisProduct == buttonItem){
                    var productsToAdd = 0;
                    if(buttonItself == ""){
                        productsToAdd = 1;
                    }
                    else{
                       productsToAdd = parseInt(buttonItself);
                       
                    }
                    var noOfProductsInCart = cellsOfThisRow[2].innerHTML;
                    var noOfProducts = parseInt(noOfProductsInCart);
                    console.log("NO OF PRoducts", noOfProducts,buttonItself);
                    noOfProducts += productsToAdd;
                    cellsOfThisRow[2].innerHTML = noOfProducts;

                    var moneyStuffDollarless = moneyStuff.replace('$', '');
                    var totalNumber = parseInt(moneyStuffDollarless);
                    
                    cellsOfThisRow[3].innerHTML = "$" + noOfProducts * totalNumber;

                    result += (productsToAdd * totalNumber); 

                    const priceCompilation = document.querySelector('span');
                    priceCompilation.innerHTML = '$' + result; 


                    return;
                }

                console.log(nameOfThisProduct.innerHTML);
             }
             

             
         }



         const newRow = document.createElement('tr');

         const newCell = document.createElement('td');
         newCell.innerHTML = buttonItem;
         newRow.appendChild(newCell);

         const newCell1 = document.createElement('td');
         if (buttonItem == 'External Hard Drive') {
             newCell1.innerHTML = externalHard;
         } else if(buttonItem == '3D Camera') {
             newCell1.innerHTML = camera;
         } else {
             newCell1.innerHTML = wristWatch;
         }
         newRow.appendChild(newCell1);

         const newCell3 = document.createElement('td');
         if (buttonItself === '') {
             newCell3.innerHTML = 1;
         } else {
            newCell3.innerHTML = buttonItself;
         }
         
         newRow.appendChild(newCell3);

         const newCell2 = document.createElement('td');
         newCell2.innerHTML = moneyStuff;
         newRow.appendChild(newCell2);

         const newCell4 = document.createElement('td');
         newCell4.classList.add('newCell');
         newCell4.innerHTML = '<i class="fas fa-times-circle"></i>' ;

        //  icon.classList.add('fas-fa-times-circle');
        //  console.log(icon);
         newRow.appendChild(newCell4);
        


         

         table.appendChild(newRow);  
         
            // const lastRow = document.createElement('tr');
            // lastRow.classList.add('lastRow');
            // const firstTrow = document.createElement('td');
            // const secondTrow = document.createElement('td');
            // const total = document.createElement('td');
            // const priceCompile = document.createElement('td');
            // total.classList.add('total');
            // total.innerHTML = 'Total:';
            // lastRow.appendChild(firstTrow);
            // lastRow.appendChild(secondTrow);
            // lastRow.appendChild(total);
            // lastRow.appendChild(priceCompile);
            // table.appendChild(lastRow);
         const priceCompilation = document.querySelector('span');
         

         
         var moneyStuffDollarless = moneyStuff.replace('$', '');
         var totalNumber = parseInt(moneyStuffDollarless);
         var totalQuantity = (totalNumber * newCell3.innerHTML);
         result += totalQuantity; 
         priceCompilation.innerHTML = '$' + result; 

           
         
         

    })
})


tableItems.addEventListener('click', remove);

function remove(e){
    let items = e.target;
    let parent = items.parentElement;
    let parentChildren = Array.from(parent.children);
    if(items.className === "newCell"){
        const priceCompilation = document.querySelector('span');
        var priceCompilationValue = priceCompilation.innerHTML.replace('$', '');
        var previousValueInt = parentChildren[3].innerHTML.replace('$', '')
        var previousQuantity = parentChildren[2].innerHTML
        console.log(priceCompilationValue, previousValueInt,previousQuantity);
        priceCompilation.innerHTML = priceCompilationValue - (previousValueInt);
        result = priceCompilationValue - (previousValueInt);
        parent.remove();
        console.log(previousQuantity, previousValueInt);

        
        
        
    }
}


function displayProducts(){
    products.forEach((product)=> {
      var newElement = document.createElement("div");

      newElement.className = "flex";


      var nameNode = document.createTextNode(product['name']);
      var priceNode = document.createTextNode(product['price']);
      var codeNode = document.createTextNode(product['code']);
      var imageElement = document.createElement("img");
      imageElement.src = product['imgSrc'];
      var buttonElement = document.createElement("button");
      buttonElement.innerHtml = "Add TO CArt";

      newElement.appendChild(nameNode);
      newElement.appendChild(priceNode);
      newElement.appendChild(codeNode);
      newElement.appendChild(imageElement);
      newElement.appendChild(buttonElement);

      var productsDiv = document.getElementById('productsDiv');

      productsDiv.appendChild(newElement);
    })
}

displayProducts();






