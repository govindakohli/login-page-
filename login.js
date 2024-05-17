// let body = document.querySelector("body")
// let mode = document.querySelector("#btn1")
// let currMode = "light" ;

//     mode.addEventListener("click" , () => {
//         if (currMode=="light"){
//             currMode = "dark"
//             body.classList.add("dark")
//             body.classList.remove("light")
//         }else  {
//             currMode = "light"
//             body.classList.add("light")
//             body.classList.remove("dark")
//         }
//         console.log (currMode)
//     } )

let mode = document.querySelector("#btn1");
let body = document.querySelector("body");
let div = document.querySelector("div");
let heaidng = document.querySelector("h1")
// let inner_box = document.querySelector( ".login")


let dark = () => {
    body.classList.add("dark")
        body.classList.remove("light")
        div.classList.add("dark")
        div.classList.remove("light")
        heaidng.classList.add("dark")
        heaidng.classList.remove("light")
        mode.classList.add("dark")
        mode.classList.remove("light")
        inner_box.classList.add("nav")
        inner_box.classList.remove("nav")
}

let light = () => {
    currMode = "light"
    body.classList.add("light")
    body.classList.remove("dark")
    div.classList.add("light")
    div.classList.remove("dark")
    heaidng.classList.add("light")
    heaidng.classList.remove("dark")
    mode.classList.add("light")
    mode.classList.remove("dark")
    inner_box.classList.add("light")
    inner_box.classList.remove("dark")
    
}

let currMode = "light"
mode.addEventListener("click" , () => {
    if (currMode=="light"){
        currMode = "dark"
        dark()
    }else  {
        light()
    }
    console.log (currMode)
} )