import * as mat from 'materialize-css/dist/js/materialize.min';
import hljs from 'highlight.js/lib/index';

import * as boilerplates from './boilerplate/boilerplates';

document.addEventListener('DOMContentLoaded', () =>  {
  mat.FormSelect.init(document.querySelectorAll('select'));
  mat.Tabs.init(document.getElementById('code-tabs'));

  document.getElementById('template-boilerplate').innerHTML = boilerplates.templateBoilerplate;
  document.getElementById('controller-boilerplate').innerHTML = boilerplates.controllerBoilerplate;
  document.getElementById('input-card-boilerplate').innerHTML = boilerplates.inputCardBoilerplate;

  hljs.initHighlightingOnLoad();
});
