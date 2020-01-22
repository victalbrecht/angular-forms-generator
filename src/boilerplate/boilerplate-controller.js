import handlebars from 'handlebars/dist/handlebars';
import hljs from 'highlight.js/lib/index';
import * as mat from 'materialize-css/dist/js/materialize.min';
import * as JSZip from 'jszip/dist/jszip.min';
import { saveAs } from 'file-saver';

import * as utils from '../utils';

let inputCount = 1;

export const renderCode = () => {
  document.getElementById('template-code').innerText = compileBoilerplate(document.getElementById('template-boilerplate').innerHTML);
  document.getElementById('controller-code').innerText = compileBoilerplate(document.getElementById('controller-boilerplate').innerHTML);
  document.getElementById('model-code').innerText = compileBoilerplate(document.getElementById('model-boilerplate').innerHTML);
  document.getElementById('export-component-button').classList.remove('disabled');
  hljs.initHighlighting.called = false;
  hljs.initHighlighting();
  renderPreview();
};

export const compileBoilerplate = boilerplateRef => {
  const codeData = {
    componentName: window.componentName,
    formName: window.formName,
    inputList: getInputCardsValues()
  };
  return handlebars.compile(boilerplateRef)(codeData);
};

export const renderPreview = () => {
  const previewContainer = document.getElementById('preview-container').contentDocument;
  previewContainer.open();
  previewContainer.write('<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">');
  previewContainer.write(document.getElementById('template-code').innerText);
  previewContainer.write(`<script type="text/javascript">document.querySelector('button').addEventListener('click', event => event.preventDefault());</script>`);
  previewContainer.body.style.padding = '10px';
  previewContainer.close();
};

export const destroyBoilerplates = () => {
  document.getElementById('template-code').innerText = '';
  document.getElementById('controller-code').innerText = '';
  document.getElementById('model-code').innerText = '';
  document.getElementById('preview-container').contentDocument.documentElement.innerHTML = '';
  document.getElementById('export-component-button').classList.add('disabled');
};

export const renderNewInputCard = async () => {
  inputCount++;
  const newInputCard = handlebars.compile(document.getElementById('input-card-boilerplate').innerHTML)({ inputCardId: inputCount });
  const newInputCardRef = new DOMParser().parseFromString(newInputCard, 'text/html').body.children[0];
  document.getElementById('inputs').appendChild(newInputCardRef);
  mat.FormSelect.init(document.querySelector(`#input-card-${inputCount} select`));
  await utils.wait(500);
  newInputCardRef.classList.remove('slide-from-left');
};

export const destroyInputCard = async inputId => {
  const inputCard = document.getElementById(`input-card-${inputId}`);
  inputCard.classList.add('slide-to-left');
  await utils.wait(500);
  inputCard.parentNode.removeChild(inputCard);
};

export const getInputCardsValues = () => {
  const filledInputCards = [...document.getElementById('inputs').children].filter(inputCard => inputCard.children[0].children[0].children[0].value.trim());
  return filledInputCards.map(inputCard => {
    return {
      name: inputCard.querySelector('input[type=text]').value.trim(),
      type: inputCard.querySelector('select').value,
      required: inputCard.querySelector('input[type=checkbox]').checked
    };
  });
};

export const exportComponent = () => {
  const templateCode = compileBoilerplate(document.getElementById('template-boilerplate').innerHTML);
  const controllerCode = compileBoilerplate(document.getElementById('controller-boilerplate').innerHTML);
  const modelCode = compileBoilerplate(document.getElementById('model-boilerplate').innerHTML);
  const jszip = new JSZip();
  const componentName = utils.kebabizeString(window.componentName);
  jszip.file(`${componentName}.component.html`, templateCode);
  jszip.file(`${componentName}.component.ts`, controllerCode);
  jszip.file(`${utils.kebabizeString(formName)}.model.ts`, modelCode);
  jszip.file(`${componentName}.component.css`, '');
  jszip.generateAsync({ type: 'blob' }).then(content => saveAs(content, `${componentName}-component.zip`));
};


