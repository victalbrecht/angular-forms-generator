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
      componentName: utils.camelizeString(componentName),
      formName: utils.camelizeString(formName),
      inputList: utils.getInputCardsValues()
    };
    console.log(codeData)
    boilerplateController.renderCode(codeData);
  } else
    boilerplateController.destroyCode();
};

window.deleteInputCard = inputId => boilerplateController.destroyInputCard(inputId);

window.addInputCard = () => boilerplateController.renderNewInputCard();
