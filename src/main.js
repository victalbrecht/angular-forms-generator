'use strict';

import '@fortawesome/fontawesome-free/js/all';

import './bootstrap';
import './main.sass';
import * as boilerplateController from './boilerplate/boilerplate-controller';
import { camelizeString } from './utils';

window.refreshBoilerplateData = () => {
  const componentName = camelizeString(document.getElementById('component-name').value);
  const formName = camelizeString(document.getElementById('form-name').value);
  const firstInputName = camelizeString(document.getElementById('input-name-1').value);
  if (componentName && formName && firstInputName) {
    const codeData = {
      componentName: componentName,
      formName: formName,
      inputList: boilerplateController.getInputCardsValues()
    };
    boilerplateController.renderCode(codeData);
    boilerplateController.renderPreview();
  } else
    boilerplateController.destroyBoilerplates();
};

window.deleteInputCard = inputId => { 
  boilerplateController.destroyInputCard(inputId);
  refreshBoilerplateData();
};

window.addInputCard = () => boilerplateController.renderNewInputCard();

window.exportComponent = () => { };
