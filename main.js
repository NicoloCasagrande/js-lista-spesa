"use strict";

const shoppingList = [
    'Vino',
    'Pane',
    'Birra',
    'Disinfettante'
];

console.log(shoppingList);
const ulList = document.getElementById("list");
console.log(ulList);

let i = 0;

while( i < shoppingList.length ){
    console.log('qualcosa');
    const listItem = document.createElement("li");
    listItem.innerHTML = shoppingList[i];
    ulList.append(listItem);
    i++;
}