import handlebars from 'handlebars/dist/handlebars';
import hljs from 'highlight.js/lib/index';

import * as boilerplate from './boilerplates';

export class BoilerplateController {
  renderCode(codeData) {
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
    const controller = handlebars.compile(document.getElementById('controller-boilerplate').innerHTML);
    document.getElementById('controller-code').innerText = controller(controllerData);
  }
}