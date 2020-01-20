'use strict';

import '@fortawesome/fontawesome-free/js/all';

import './bootstrap';
import './main.sass';
import { BoilerplateController } from './boilerplate/boilerplate-controller';
import { Utils } from './utils';

const boilerplateController = new BoilerplateController();
const utils = new Utils();

window.refreshBoilerplateData = () => {
  const componentName = document.getElementById('component-name').value.trim();
  const formName = document.getElementById('form-name').value.trim();
  if (componentName && formName) {
    const codeData = {
      componentName: utils.normalizeString(componentName),
      formName: utils.normalizeString(formName),
      inputList: [
        { name: 'username', rawName: 'Username', type: 'text', required: false }, 
        { name: 'email', rawName: 'Email', type: 'email', required: true }
      ]
    };
    boilerplateController.renderCode(codeData);
  } else
    boilerplateController.destroyCode();
};

window.deleteInputCard = inputId => boilerplateController.destroyInputCard(inputId);

window.addInputCard = () => boilerplateController.renderNewInputCard();
