//  EXAMINE THE DOCUMENT OBJECT

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head );
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[8]);
// document.all[8].textContent = "Nisha Rohilla"
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById("header-title"));

// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = "Hello"
// headerTitle.innerText = "goodbye" // here innerText overwroted textcontent
//(difference between textContent and innerText one of them pay attention is style)
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML='<h3>Hello</h3>';
// headerTitle.style.borderBottom="solid 3px black"


// GETELEMENTSBYCLASSNAME
// var items = document.getElementsByClassName('list-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Modern Javascript';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

//Gives error
// items.style.backgroundColor = 'pink'

// for (let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'pink'
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li')
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Modern Javascript';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';
// for (let i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = 'pink'
// }

//  QUERYSELECTOR //
// var header = document.querySelector('#header-title');
// header.style.borderBottom = 'solid 5px #ccc';

// var input = document.querySelector('input');
// input.value = 'hello world';

// var submit = document.querySelector('input[type="submit"]')
// submit.value = 'SEND'

// var item = document.querySelector('.list-item');
// item.style.color = 'red';
// console.log(item);

// var lastItem = document.querySelector('.list-item:last-child'); // not working
// lastItem.style.color = 'pink';

// var secondItem= document.querySelector('.list-item:nth-child(2)'); // not working
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var items = document.querySelectorAll('.list-item');
// console.log(items)

// items[0].textContent = "5 star";

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i=0; i <odd.length;i++){
//     odd[i].style.backgroundColor = '#ccc';
// }


// // TRAVERSING THE DOM // 
// var itemList = document.querySelector('#header-title')
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);

// chileNodes
var itemList = document.querySelector('.group-items')
// console.log(itemList.childNodes)

// console.log(itemList.children)
// console.log(itemList.children[5]);
// itemList.children[1].style.backgroundColor = 'yellow'

// // FirstChild
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello';

// // lastChild
// console.log(itemList.lastChild);
// // lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello guys';

// nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibiling
// console.log(itemList.nextElementSibling);

// // previousSibling
// console.log(itemList.previousSibling);
// // previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'white'


// createElement

// Create a div






 


