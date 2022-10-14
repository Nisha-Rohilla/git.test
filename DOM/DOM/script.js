// getElementById
var idd = document.getElementById('root')
idd.innerHTML="I love india"
console.log(idd)

// getElementByClassName
/*var list = document.getElementsByClassName('list-2')
console.log(list.length)
list.innerHTML = "my"
console.log(list);
for(let i=0;i<list.length;i++){
    list[i].innerHTML="my"
}*/

// querySelector ----querySelectorAll
let qur = document.querySelectorAll('p.intro')
// qur.innerHTML= 'HTML';
for(let i=0;i<qur.length;i++){
    qur[i].textContent= '<p>       HTML    </p>';
}

// Traversing
//accessing parent element
/*let trv = document.getElementById('trv')
let prt = trv.parentElement;
prt.innerHTML = "<p>JAVASCRIPT</p>"
console.log(prt);*/
//accessing child element
/*let prt = document.getElementById('trv-prt');
let child = prt.lastElementChild;
let child = prt.children
console.log(child)*/
// Accessing SIBLINGS
/*let sib = document.getElementById('trv')
console.log(sib);
let sibling = sib.nextElementSibling;
let sibling=sib.previousElementSibling;
console.log(sibling)*/

// Append and Create Element
let app = document.getElementById('trv-prt')
// let app = document.getElementsByClassName('prt')
// console.log(app)
// let list = document.createElement('li');
// list.className="list-5"
list.id='list--5'
let text =document.createTextNode("List-5")
list.appendChild(text)

list.innerHTML='List-100000'
console.log(list)
app.appendChild(list);
console.log(app)

// insertBeforeElement

let parent = document.getElementById('intro')
let elm = document.createElement('li');
elm.textContent="list-5"
let pos = parent.firstElementChild;
parent.insertBefore(elm,pos);




