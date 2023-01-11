/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ['The dog','My grandma','His turtle','My bird'];
  let what = ['my homework', 'the keys', 'the car'];
  let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
  
  let whoRandom = Math.floor(Math.random() * who.length);
  let whatRandom = Math.floor(Math.random() * what.length);
  let whenRandom = Math.floor(Math.random() * when.length);
  
  
  let excuse = who[whoRandom] + ' ' + what[whatRandom] + ' ' + when[whenRandom];

  let element = document.querySelector('#excuse');
  element.innerHTML = excuse;
  
  
  
  
  console.log("escusa: ", excuse);
  console.log("element: ", element);
  console.log("innerHTML: ", element.innerHTML);

};
