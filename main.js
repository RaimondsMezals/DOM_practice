"use strict";



let task1 = () => {
    let bdy = document.querySelector("body");
    let heading1 = document.createElement("h1");
    heading1.innerText = "This is my h1 heading!";
    bdy.appendChild(heading1);
    test();
    butt1.removeEventListener("click", task1);
}

let test = () => {
console.log("hey");

}

let alt1 = document.querySelector("#one");
console.log(alt1);
alt1.innerText = "New Text!";

let butt1 = document.querySelector("#buttOne");

butt1.addEventListener("click", task1);