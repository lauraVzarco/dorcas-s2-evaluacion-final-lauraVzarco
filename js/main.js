'use strict';
var input = document.querySelector('.js-input');
var button =document.querySelector('.js-button');


function getShowInfo(){
  console.log(input);
  fetch('http://api.tvmaze.com/search/shows?q=' + input.value)
    .then(function(response) {
      return response.json();
    })
    .then(function(json){
      console.log(json);
      for (var i = 0; i < json.length; i++) {
        //defino variables
        var main = document.querySelector('main');
        var box = document.createElement('div');
        var showBox = document.createElement('div');
        var img = document.createElement('img');
        var titleShow = document.createElement('p');
        //Doy clases a los elementos creados
        box.classList.add('box');
        showBox.classList.add('showInfo');
        img.classList.add('showImg');
        titleShow.classList.add('title');
        //Matrioskas, meto una cosa dentro de otra
        main.appendChild(box);
        box.appendChild(showBox);
        showBox.appendChild(img);
        showBox.appendChild(titleShow);
        //¡A pintar!
        console.log(json[i].show);
        console.log(json[i].show.name);
        //Empiezo pintanfo los titulos
        titleShow.innerHTML = json[i].show.name;
        //continuo pintando los titulos de la serie
        if ( json[i].show.image === null) {
          img.src = 'https://via.placeholder.com/210x295/cccccc/666666/?text=TV';
        } else {
          img.src = json[i].show.image.medium;
        }

      }
    });
}



button.addEventListener('click', getShowInfo);
