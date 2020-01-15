import * as mat from 'materialize-css/dist/js/materialize.min';
import hljs from 'highlight.js/lib/index';

import * as boilerplate from './boilerplate/boilerplates';
import { BoilerplateParser } from './boilerplate/boilerplate-parser';

document.addEventListener('DOMContentLoaded', () =>  {
  mat.FormSelect.init(document.querySelectorAll('select'));
  mat.Tabs.init(document.getElementById('codeTabs'));

  document.getElementById('template-boilerplate').innerHTML = boilerplate.templateBoilerplate;
  document.getElementById('controller-boilerplate').innerHTML = boilerplate.controllerBoilerplate;

  const boilerplateParser = new BoilerplateParser();
  boilerplateParser.renderCode();

  hljs.initHighlightingOnLoad();
});