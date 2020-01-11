'use strict';

import 'materialize-css/dist/js/materialize.min';
import '@fortawesome/fontawesome-free/js/all';
import './main.sass';

M.Tabs.init(document.getElementById('codeTabs'));

document.addEventListener('DOMContentLoaded', () =>  M.FormSelect.init(document.querySelectorAll('select')));