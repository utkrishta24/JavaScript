/*
let val;
val=document;
val=document.all;
val=document.all[0];
val=document.all.length;
val=document.head;
val=document.body;
val=document.doctype;
val=document.domain;
val=document.URL;
val=document.characterSet;
val=document.contentType;

val=document.forms;
val=document.forms[0];
val=document.forms[0].id;
val=document.forms[0].method;
val=document.forms[0].action;
val=document.links;
val=document.links[0];
val=document.links[0].id;
val=document.links[0].className;
val=document.links[0].classList;
val=document.links[0].classList[0];
val=document.images;
val=document.scripts;
val=document.scripts[2];
val=document.scripts[2].getAttribute('src');

let scripts=document.scripts;

let scriptsArr=Array.from(scripts);
scriptsArr.forEach(function(script){
    console.log(script.getAttribute('src'));
});

console.log(val);
*/

/*
//Single Element Selectors
//document.getElementById()

console.log(document.getElementById('task-title'));

//Get things from  the element

console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle=document.getElementById('task-title');

//Change Styling

// document.getElementById('task-title').style.background='#333';
// document.getElementById('task-title').style.color='#fff';
// document.getElementById('task-title').style.padding='5px';

taskTitle.style.background='#333';
taskTitle.style.color='#fff';
taskTitle.style.padding='5px';


// document.getElementById('task-title').style.display='none';

//change content

// document.getElementById('task-title').textContent='Task List';
// document.getElementById('task-title').innerText='My Tasks';
// document.getElementById('task-title').innerHTML='<span style="color:red">Task List</span>';

taskTitle.textContent='Task List';
taskTitle.innerText='My Tasks';
taskTitle.innerHTML='<span style="color:red">Task List</span>';

//document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color='red';
document.querySelector('ul li').style.color='blue';
document.querySelector('li:last-child').style.color='green';
document.querySelector('li:nth-child(3)').style.color='yellow';
document.querySelector('li:nth-child(4)').textContent='Hello World';
document.querySelector('li:nth-child(odd)').style.background='#ccc';
document.querySelector('li:nth-child(even)').style.background='#f4f4f4';
*/

//Multiple Elements Selector
//document.getElementsByClassName()
// const items=document.getElementsByClassName('collection-item');

// console.log(items);
// console.log(items[0]);
// items[0].style.color='red';
// items[3].textContent='hello';

/*
const listItems=document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

//document.getElementsByTagName
let lis=document.getElementsByTagName('li');

console.log(lis);
console.log(lis[0]);
lis[0].style.color='red';
lis[3].textContent='Hello' ;
//convert html into arrays
lis=Array.from(lis);
lis.reverse();
lis.forEach(function(li,index){
console.log(li.className);
li.textContent=`${index}:Hello`;
});
console.log(lis);
*/

/*
//document.querySelectorAll


const items= document.querySelectorAll('ul.collection li.collection-item');


items.forEach(function(item,index){ 
    item.textContent=`${index}:Hello`;
    });

const liOdd= document.querySelectorAll('li:nth-child(odd)');
const liEven= document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li,index){ 
 li.style.background='#ccc';
  });

for(let i=0;i <liEven.length;i++)
{
    liEven[i].style.background='#f4f4f4';
}

console.log(items);
*/

/*
let val;

const list=document.querySelector('ul.collection');
const listItem=document.querySelector('li.collection-item:first-child');

val=listItem;
val=list;

//get child nodes
val=list.childNodes;
val=list.childNodes[0];
val=list.childNodes[0].nodeName;
val=list.childNodes[1].nodeType;
//1-element
//2-attribute (deprecated)
//3-text node
//8-comment
//9-document itself
//10-doctype



//get children element node
//val=list.children;
val=list.children[1];
list.children[1].textContent='Hello';

//children of children
list.children[3].children[0].id='text-link';
val=list.children[3].children[0];

//first child
val=list.firstChild;
val=list.firstElementChild;
//last child
val=list.lastChild;
val=list.lastElementChild;
//count child elements
val=list.childElementCount;

//get parent node
val=listItem.parentNode;
val=listItem.parentElement;
val=listItem.parentElement.parentElement;

//get next sibling
val=listItem.nextSibling;
val=listItem.nextElementSibling.nextElementSibling.previousElementSibling;

//get previous sibling
val=listItem.previousSibling;
val=listItem.previousElementSibling;

console.log(val);
*/

/*
//create element
const li=document.createElement('li');

//add class
li.className='collection-item';

//add id
li.id="new-id"

//add attribute
li.setAttribute('title','New Item');

//create text node and append
li.appendChild(document.createTextNode('Hello World'));

//create new link element
const link=document.createElement('a');
//add class
link.className='delete-item secondary-content';
//add icon html
link.innerHTML='<i class="fa fa-remove"></i>';
//append link into li
li.appendChild(link);

//append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);
console.log(link);
*/

/*
//Replace Element

//create element
const newHeading=document.createElement('h2');
//add id
newHeading.id='task-title';
//new text node
newHeading.appendChild(document.createTextNode('Task List'));

//get the old heading
const oldHeading=document.getElementById('task-title');
//parent
const cardAction=document.querySelector('.card-action');
//replace
cardAction.replaceChild(newHeading,oldHeading);

//console.log(newHeading);

//remove element
const lis=document.querySelectorAll('li');
const list=document.querySelector('ul');

//remove list items
lis[0].remove();

//remove child element
list.removeChild(lis[3]);


//classes and attributes
const firstLi=document.querySelector('li:first-child');
const link=firstLi.children[0];
console.log(firstLi.children[0]);

//classes
let val;
val=link.className;
val=link.classList;
val=link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val=link;

//attributes
val=link.getAttribute('href');
val=link.setAttribute('href','https://google.com');
link.setAttribute('title','Google');
val=link.hasAttribute('title');
link.removeAttribute('title');

console.log(val);
*/

/*
//mouse events

//  document.querySelector('.clear-tasks').addEventListener('click',
//  function(e){
//      console.log('Hello World');

//     //  e.preventDefault();
//  });

document.querySelector('.clear-tasks').addEventListener('click', onClick);
function onClick(e){
    //console.log('Clicked');
    let val;
    val=e;

//event target element
val=e.target;
val=e.target.id;
val=e.target.className;
val=e.target.classList;

//e.target.innerText='Hello';


//Event type
val=e.type;

//timestamp
val=e.timeStamp;

//coodinates events realtive to window
val=e.clientY;
val=e.clientX;

//coordinates relative to element itself
val=e.offsetY;
val=e.offsetX;
   

console.log(val);
}
*/

/*
const clearBtn=document.querySelector('.clear-tasks');
const card=document.querySelector('.card');
const heading=document.querySelector('h5');

//click
// clearBtn.addEventListener('click',runEvent);
//double click
// clearBtn.addEventListener('dblclick',runEvent);
//mousedown
// clearBtn.addEventListener('mousedown',runEvent);
//mouseup
// clearBtn.addEventListener('mouseup',runEvent);
//mouseenter
// card.addEventListener('mouseenter',runEvent);
//mouseleave
// card.addEventListener('mouseleave',runEvent);
//mouseover
// card.addEventListener('mouseover',runEvent);
//mouseout
// card.addEventListener('mouseout',runEvent);
//mousemove
card.addEventListener('mousemove',runEvent);


//event handler
function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);


    heading.textContent=`MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},50)`;
}

*/

/*
//keyboard input
const form=document.querySelector('form');
const taskInput=document.getElementById('task');
const heading=document.querySelector('h5');
const select=document.querySelector('select');

//clear Input
taskInput.value='';

// form.addEventListener('submit',runEvent);


//keydown
// taskInput.addEventListener('keydown',runEvent);

//keyup
// taskInput.addEventListener('keyup',runEvent);

//keypress
// taskInput.addEventListener('keypress',runEvent);

//Focus
// taskInput.addEventListener('focus',runEvent);

//blur
// taskInput.addEventListener('blur',runEvent);

//Cut
// taskInput.addEventListener('cut',runEvent);

//Paste
// taskInput.addEventListener('paste',runEvent);

//input
// taskInput.addEventListener('input',runEvent);

//change
// select.addEventListener('change',runEvent);

function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);
    console.log(e.target.value);
    // heading.innerText=e.target.value;
//get input value
    // console.log(taskInput.value);

    // e.preventDefault();
}

*/
/*
// Event Bubbling 

// document.querySelector('.card-title').addEventListener('click',function(){
//     console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click',function(){
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click',function(){
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click',function(){
//     console.log('col');
// });


//Event Delegations

// const delItem= document.querySelector('.delete-item');
// delItem.addEventListener('click',deleteItem);

document.body.addEventListener('click',deleteItem);

function deleteItem(e){
    
    // console.log(e.target);
//     if(e.target.parentElement.className==='delete-item secondary-content'){
//         console.log('delete item');
//     }
if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
}
}
*/

