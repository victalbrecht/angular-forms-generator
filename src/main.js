'use strict';

import '@fortawesome/fontawesome-free/js/all';
import * as JSZip from 'jszip/dist/jszip.min';
import { saveAs } from 'file-saver';

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

window.exportComponent = () => {
  const templateCode = document.getElementById('template-code').innerText;
  const controllerCode = document.getElementById('controller-code').innerText;
  const stylesCode = document.getElementById('styles-code').innerText;
  const jszip = new JSZip();
  const componentName = camelizeString(document.getElementById('component-name').value);
  jszip.file(`${componentName}.component.html`, templateCode);
  jszip.file(`${componentName}.component.ts`, controllerCode);
  jszip.file(`${componentName}.component.css`, stylesCode);
  jszip.generateAsync({ type: 'blob' }).then(content => saveAs(content, `${componentName}-component.zip`));
};
