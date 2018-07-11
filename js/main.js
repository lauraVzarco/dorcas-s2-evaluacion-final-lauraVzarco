'use strict';
var input = document.querySelector('.js.input');
var button =document.querySelector('.js-button');

function getShowInfo(){
  fetch('http://api.tvmaze.com/search/shows?q=' + input.value)
}



button.addEventListener('click', getShowInfo)
