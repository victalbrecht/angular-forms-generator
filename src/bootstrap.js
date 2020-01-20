import * as mat from 'materialize-css/dist/js/materialize.min';
import hljs from 'highlight.js/lib/index';

import * as boilerplate from './boilerplate/boilerplates';
import { Utils } from './utils';

const utils = new Utils();

document.addEventListener('DOMContentLoaded', () =>  {
  mat.FormSelect.init(document.querySelectorAll('select'));
  mat.Tabs.init(document.getElementById('codeTabs'));

  document.getElementById('template-boilerplate').innerHTML = boilerplate.templateBoilerplate;
  document.getElementById('controller-boilerplate').innerHTML = boilerplate.controllerBoilerplate;
  document.getElementById('input-card-boilerplate').innerHTML = boilerplate.inputCardBoilerplate;

  hljs.initHighlightingOnLoad();
});
