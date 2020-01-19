import handlebars from 'handlebars/dist/handlebars';
import hljs from 'highlight.js/lib/index';

import * as mat from 'materialize-css/dist/js/materialize.min';

export class BoilerplateController {
  constructor() { this.inputCount = 1; }

  renderCode(codeData) {
    codeData.inputList = [{ name: 'username', type: 'text', required: false }, { name: 'email',  type: 'email', required: true }];
    const template = handlebars.compile(document.getElementById('template-boilerplate').innerHTML);
    const controller = handlebars.compile(document.getElementById('controller-boilerplate').innerHTML);
    document.getElementById('template-code').innerText = template(codeData);
    document.getElementById('controller-code').innerText = controller(codeData);
    hljs.initHighlighting.called = false;
    hljs.initHighlighting();
  }

  destroyCode() {
    document.getElementById('template-code').innerText = '';
    document.getElementById('controller-code').innerText = '';
  }

  renderNewInputCard() {
    this.inputCount++;
    const newInputCard = handlebars.compile(document.getElementById('input-card-boilerplate').innerHTML);
    const domParser = new DOMParser().parseFromString(newInputCard({ inputCardId: this.inputCount }), 'text/html');
    document.getElementById('inputs').appendChild(domParser.body.children[0]);
    mat.FormSelect.init(document.querySelector(`#input-card-${this.inputCount} select`));
  }

  destroyInputCard(inputId) {
    const inputCard = document.querySelector(`#input-card-${inputId}`);
    inputCard.parentNode.removeChild(inputCard);
  }
}