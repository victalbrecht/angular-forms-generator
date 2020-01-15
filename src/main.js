'use strict';

import * as mat from 'materialize-css/dist/js/materialize.min';
import '@fortawesome/fontawesome-free/js/all';
import handlebars from 'handlebars/dist/handlebars';

import './bootstrap';
import './main.sass';

let inputCount = 1;

window.refreshBoilerplateData = () => {

};

window.deleteInputCard = inputId => {
  const inputCard = document.querySelector(`#input-card-${inputId}`);
  inputCard.parentNode.removeChild(inputCard);
};

window.addInputCard = () => {
  inputCount++;
  const newInputCard = handlebars.compile(document.getElementById('input-card').innerHTML);
  const domParser = new DOMParser().parseFromString(newInputCard({ inputCardId: inputCount }), "text/html");
  document.getElementById('inputs').appendChild(domParser.body.children[0]);
  mat.FormSelect.init(document.querySelector(`#input-card-${inputCount} select`));
};
