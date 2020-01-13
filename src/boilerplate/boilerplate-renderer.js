import handlebars from 'handlebars/dist/handlebars';

import * as boilerplate from './boilerplates';

export class BoilerplateRenderer {
  constructor() {
    this.renderTemplate = templateData  => {
      const template = handlebars.compile(document.getElementById('template-boilerplate').innerHTML);
      document.getElementById('template-code').innerText = template(templateData);
    };

    this.renderController = controllerData => {
      const template = handlebars.compile(document.getElementById('controller-boilerplate').innerHTML);
      document.getElementById('controller-code').innerText = template(controllerData);
    };
  }
}