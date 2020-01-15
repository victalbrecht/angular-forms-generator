'use strict';

import './bootstrap';
import '@fortawesome/fontawesome-free/js/all';
import './main.sass';
import handlebars from 'handlebars/dist/handlebars';
import * as mat from 'materialize-css/dist/js/materialize.min';

let inputQuantity = 1;

window.refreshBoilerplateData = () => {

};

window.deleteInputCard = inputId => {
  const inputCard = document.querySelector(`#input-card-${inputId}`);
  console.log(inputCard)
  inputCard.parentNode.removeChild(inputCard);
  inputQuantity--;
};

window.addInputCard = () => {
  inputQuantity++;
  const newInputCard = handlebars.compile(document.getElementById('input-card').innerHTML);
  document.getElementById('inputs').innerHTML += newInputCard({ inputCardId: inputQuantity });  
  mat.FormSelect.init(document.querySelector(`#input-card-${inputQuantity} select`));
};