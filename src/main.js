'use strict';

import '@fortawesome/fontawesome-free/js/all';
import * as JSZip from 'jszip/dist/jszip.min';
import { saveAs } from 'file-saver';

import './bootstrap';
import './main.sass';
import * as boilerplateController from './boilerplate/boilerplate-controller';
import { camelizeString } from './utils';

window.refreshBoilerplateData = () => {
  const componentName = document.getElementById('component-name').value;
  const formName = document.getElementById('form-name').value;
  const firstInputName = document.getElementById('input-name-1').value;
  if (componentName && formName && firstInputName) {
    window.componentName = camelizeString(componentName);
    window.formName = camelizeString(formName);
    window.firstInputName = camelizeString(firstInputName);
    boilerplateController.renderCode();
  } else 
    boilerplateController.destroyBoilerplates();
};

window.deleteInputCard = inputId => {
  boilerplateController.destroyInputCard(inputId);
  refreshBoilerplateData();
};

window.addInputCard = () => boilerplateController.renderNewInputCard();

window.exportComponent = () => {
  const templateCode = boilerplateController.compileBoilerplate(document.getElementById('template-boilerplate').innerHTML);
  const controllerCode = boilerplateController.compileBoilerplate(document.getElementById('controller-boilerplate').innerHTML);
  const jszip = new JSZip();
  const componentName = camelizeString(document.getElementById('component-name').value);
  jszip.file(`${componentName}.component.html`, templateCode);
  jszip.file(`${componentName}.component.ts`, controllerCode);
  jszip.file(`${componentName}.component.css`, '');
  jszip.generateAsync({ type: 'blob' }).then(content => saveAs(content, `${componentName}-component.zip`));
};
