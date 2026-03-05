const arr = ["apple", "banana","mango","orange"];
const ul = document.getElementById("unorderList");
const fragment = document.createDocumentFragment();
const arr2 = [];
for(let item of arr){
    const list = document.createElement("li");
    list.innerText = item;
    arr2.push(list);
    // fragment.append(list)
}
// ul.append(fragment)

// different way
console.log(arr2);
ul.append(...arr2);

function clickme() {
    const el = document.getElementById("h1")
    el.textContent = "Hello KM.";
}

const parEl = document.querySelector(".parent");

// for(let el of parEl.children){
//     el.addEventListener("click", ()=>{
//         el.textContent = "I'm clicked."
//     })
// }

function handleClick(e){
    e.target.textContent = "I am clicked.";
    parEl.removeEventListener('click', handleClick)
}
parEl.addEventListener('click', handleClick)
