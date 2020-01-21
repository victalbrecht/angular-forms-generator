import handlebars from 'handlebars/dist/handlebars';
import hljs from 'highlight.js/lib/index';
import * as mat from 'materialize-css/dist/js/materialize.min';

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
  previewContainer.close();
};

export const destroyBoilerplates = () => {
  document.getElementById('template-code').innerText = '';
  document.getElementById('controller-code').innerText = '';
  document.getElementById('model-code').innerText = '';
  document.getElementById('preview-container').contentDocument.documentElement.innerHTML = '';
  document.getElementById('export-component-button').classList.add('disabled');
};

export const renderNewInputCard = () => {
  inputCount++;
  const newInputCard = handlebars.compile(document.getElementById('input-card-boilerplate').innerHTML)({ inputCardId: inputCount });
  const domParser = new DOMParser().parseFromString(newInputCard, 'text/html');
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
      name: inputCard.children[0].children[0].children[0].value.trim(),
      type: inputCard.children[0].children[1].children[0].children[0].value,
      required: inputCard.children[0].children[2].children[0].children[0].children[0].checked
    };
  });
};
