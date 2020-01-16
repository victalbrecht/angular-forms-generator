'use strict';

import * as mat from 'materialize-css/dist/js/materialize.min';
import '@fortawesome/fontawesome-free/js/all';
import handlebars from 'handlebars/dist/handlebars';

import './bootstrap';
import './main.sass';
import { BoilerplateController } from './boilerplate/boilerplate-controller';
import { Utils } from './utils';

const boilerplateController = new BoilerplateController();
const utils = new Utils();

let inputCount = 1;
let inputQuantity = 1;

window.refreshBoilerplateData = () => {
  const componentName = document.getElementById('component-name').value.trim();
  const formName = document.getElementById('form-name').value.trim();
  if (componentName && formName) {
    const codeData = {
      componentName: utils.normalizeString(componentName),
      formName: utils.normalizeString(formName)
    };
    boilerplateController.renderCode(codeData);
  } else
    boilerplateController.destroyCode();
};

window.deleteInputCard = inputId => {
  const inputCard = document.querySelector(`#input-card-${inputId}`);
  inputCard.parentNode.removeChild(inputCard);
  inputQuantity--;
};

window.addInputCard = () => {
  inputCount++;
  inputQuantity++;
  const newInputCard = handlebars.compile(document.getElementById('input-card').innerHTML);
  const domController = new DOMController().parseFromString(newInputCard({ inputCardId: inputCount }), 'text/html');
  document.getElementById('inputs').appendChild(domController.body.children[0]);
  mat.FormSelect.init(document.querySelector(`#input-card-${inputCount} select`));
};
