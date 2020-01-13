import hljs from 'highlight.js/lib/index';
import * as mat from 'materialize-css/dist/js/materialize.min';

hljs.initHighlightingOnLoad();

mat.Tabs.init(document.getElementById('codeTabs'));

document.addEventListener('DOMContentLoaded', () =>  mat.FormSelect.init(document.querySelectorAll('select')));