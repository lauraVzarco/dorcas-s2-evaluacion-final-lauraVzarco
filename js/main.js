'use strict';
//variables definidas
var input = document.querySelector('.js-input');
var button =document.querySelector('.js-button');
var main = document.querySelector('main');
var box = document.createElement('div');
var img;
var titleShow;
main.append(box);
box.classList.add('box');

//función para cambiar el color
function toggleFavorite(e){
  e.currentTarget.classList.toggle('favorite');
  var actorsName = e.currentTarget.querySelector('.titleShow');
  console.log(actorsName.innerHTML);

}

//función principal
function getShowsInfo(){
  box.innerHTML = '';
  console.log(input);
  fetch('http://api.tvmaze.com/search/people?q=' + input.value)
    .then(function(response) {
      return response.json();
    })
    .then(function(json){
      console.log(json);
      var searchResults = document.createElement('p');
      box.appendChild(searchResults);
      searchResults.innerHTML = 'Se han encontrado ' + json.length + ' resultados de ' + input.value;
      for (var i = 0; i < json.length; i++) {
        //defino variables
        var showBox = document.createElement('div');
        img = document.createElement('img');
        titleShow = document.createElement('p');
        //Doy clases a los elementos creados
        showBox.classList.add('showInfo');
        img.classList.add('showImg');
        titleShow.classList.add('titleShow');
        //Matrioskas, meto una cosa dentro de otra
        showBox.appendChild(img);
        showBox.appendChild(titleShow);
        //¡A pintar!
        console.log(json[i].person);
        console.log(json[i].person.name);
        //Empiezo pintando los titulos
        titleShow.innerHTML = json[i].person.name;
        //continuo pintando los titulos de la serie
        if ( json[i].person.image === null) {
          img.src = 'https://via.placeholder.com/210x295/cccccc/666666/?text=TV';
        } else {
          img.src = json[i].person.image.medium;
        }
        showBox.addEventListener('click', toggleFavorite);
        //una vez tengo el show box lo añado a la página
        box.append(showBox);
        console.log(json[i].person.id);
      }
    });
}


button.addEventListener('click', getShowsInfo);
