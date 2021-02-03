"use strict";



let task1 = () => {
    let bdy = document.querySelector("body");
    let heading1 = document.createElement("h1");
    heading1.innerText = "This is my h1 heading!";
    bdy.appendChild(heading1);
}

task1();

let alt1 = document.querySelector("#one");
console.log(alt1);
alt1.innerText = "New Text!";
