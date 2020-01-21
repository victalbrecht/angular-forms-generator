import * as mat from 'materialize-css/dist/js/materialize.min';
import hljs from 'highlight.js/lib/index';
import handlebars from 'handlebars/dist/handlebars';

import * as boilerplates from './boilerplate/boilerplates';
import * as utils from './utils';

handlebars.registerHelper('capitalize', utils.capitalizeFirstLetter);
handlebars.registerHelper('camelize', utils.camelizeString);
handlebars.registerHelper('kebabize', utils.kebabizeString);

document.addEventListener('DOMContentLoaded', () =>  {
  mat.FormSelect.init(document.querySelectorAll('select'));
  mat.Tabs.init(document.getElementById('code-tabs'));

  document.getElementById('template-boilerplate').innerHTML = boilerplates.templateBoilerplate;
  document.getElementById('controller-boilerplate').innerHTML = boilerplates.controllerBoilerplate;
  document.getElementById('input-card-boilerplate').innerHTML = boilerplates.inputCardBoilerplate;

  hljs.initHighlightingOnLoad();
});
