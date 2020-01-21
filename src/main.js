'use strict';

import '@fortawesome/fontawesome-free/js/all';

import './bootstrap';
import './main.sass';
import * as boilerplateController from './boilerplate/boilerplate-controller';

window.refreshBoilerplateData = () => {
  const componentName = document.getElementById('component-name').value;
  const formName = document.getElementById('form-name').value;
  const firstInputName = document.getElementById('input-name-1').value;
  if (componentName && formName && firstInputName) {
    window.componentName = componentName;
    window.formName = formName;
    window.firstInputName = firstInputName;
    boilerplateController.renderCode();
  } else 
    boilerplateController.destroyBoilerplates();
};

window.deleteInputCard = inputId => {
  boilerplateController.destroyInputCard(inputId);
  refreshBoilerplateData();
};

window.addInputCard = () => boilerplateController.renderNewInputCard();

window.exportComponent = () => boilerplateController.exportComponent();
