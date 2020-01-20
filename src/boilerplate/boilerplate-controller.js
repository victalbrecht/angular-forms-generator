import handlebars from 'handlebars/dist/handlebars';
import hljs from 'highlight.js/lib/index';

import * as mat from 'materialize-css/dist/js/materialize.min';
import { camelizeString } from '../utils';

let inputCount = 1;

export const renderCode = codeData => {
  const template = handlebars.compile(document.getElementById('template-boilerplate').innerHTML);
  const controller = handlebars.compile(document.getElementById('controller-boilerplate').innerHTML);
  document.getElementById('template-code').innerText = template(codeData);
  document.getElementById('controller-code').innerText = controller(codeData);
  hljs.initHighlighting.called = false;
  hljs.initHighlighting();
  document.getElementById('export-component-button').classList.remove('disabled');
};

export const renderPreview = () => {
  const previewContainer = document.getElementById('preview-container').contentDocument;
  previewContainer.open();
  previewContainer.write('<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">');
  previewContainer.write(document.getElementById('template-code').innerText);
  previewContainer.close();
};

export const destroyBoilerplates = () => {
  document.getElementById('template-code').innerText = '';
  document.getElementById('controller-code').innerText = '';
  document.getElementById('preview-container').contentDocument.documentElement.innerHTML = '';
  document.getElementById('export-component-button').classList.add('disabled');
};

export const renderNewInputCard = () => {
  inputCount++;
  const newInputCard = handlebars.compile(document.getElementById('input-card-boilerplate').innerHTML);
  const domParser = new DOMParser().parseFromString(newInputCard({ inputCardId: inputCount }), 'text/html');
  document.getElementById('inputs').appendChild(domParser.body.children[0]);
  mat.FormSelect.init(document.querySelector(`#input-card-${inputCount} select`));
};

export const destroyInputCard = inputId => {
  const inputCard = document.querySelector(`#input-card-${inputId}`);
  inputCard.parentNode.removeChild(inputCard);
};

export const getInputCardsValues = () => {
  const filledInputCards = [...document.getElementById('inputs').children].filter(inputCard => inputCard.children[0].children[0].children[0].value.trim());
  return filledInputCards.map(inputCard => {
    return {
      name: camelizeString(inputCard.children[0].children[0].children[0].value),
      rawName: inputCard.children[0].children[0].children[0].value,
      type: camelizeString(inputCard.children[0].children[1].children[0].children[0].value),
      required: inputCard.children[0].children[2].children[0].children[0].children[0].checked
    };
  });
};
