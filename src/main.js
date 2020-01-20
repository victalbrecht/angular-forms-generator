'use strict';

import '@fortawesome/fontawesome-free/js/all';

import './bootstrap';
import './main.sass';
import * as boilerplateController from './boilerplate/boilerplate-controller';
import { camelizeString } from './utils';

window.refreshBoilerplateData = () => {
  const componentName = document.getElementById('component-name').value.trim();
  const formName = document.getElementById('form-name').value.trim();
  const firstInputName = document.getElementById('input-name-1').value.trim();
  if (componentName && formName && firstInputName) {
    const codeData = {
      componentName: camelizeString(componentName),
      formName: camelizeString(formName),
      inputList: boilerplateController.getInputCardsValues()
    };
    boilerplateController.renderCode(codeData);
  } else
    boilerplateController.destroyCode();
};

window.deleteInputCard = inputId => { 
  boilerplateController.destroyInputCard(inputId);
  refreshBoilerplateData();
};

window.addInputCard = () => boilerplateController.renderNewInputCard();
