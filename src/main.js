'use strict';

import '@fortawesome/fontawesome-free/js/all';

import './bootstrap';
import './main.sass';
import * as boilerplateController from './boilerplate/boilerplate-controller';
import { camelizeString } from './utils';

window.refreshBoilerplateData = () => {
  const componentName = document.getElementById('component-name').value;
  const formName = document.getElementById('form-name').value;
  if (componentName && formName) {
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
