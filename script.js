function convert(){
let amount=Number(document.getElementById("input").value);
let month=Number(document.getElementById("input2").value);
let cal=(amount*(8/100))/12;

let rest=cal*month; 
let result=document.querySelector('#result');
result.innerHTML="The interest of "+ month+" month is "+rest;



//to store the value 
let store=document.createElement('div')    //create a tag
store.innerHTML=`amount:${rest}`//to store in the HTML page
save.append(store)//append the element in the creation tag
}