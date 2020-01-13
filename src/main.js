'use strict';

import './dom-inits';
import '@fortawesome/fontawesome-free/js/all';
import './main.sass';

document.getElementById('html-code').innerText = 
`<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <meta http-equiv="X-UA-Compatible" content="ie=edge">
 <link rel="stylesheet" href="main.css">
 <script src="main.js" defer></script>
 <title>Angular Forms Generator</title>
</head>
<body>
 <div class="navbar-fixed">
  <nav>
   <div class="nav-wrapper">
    <a class="brand-logo not-selectable">
     <span class="fab fa-angular"></span>ngular Forms Generator
    </a>
   </div>
  </nav>
 </div>
 <section>
  <div class="row mb-0">
   <div class="col s12 l6">
    <h6 class="grey-text text-darken-1">Main Form Information</h6>
    <div class="card">
     <div class="row mb-0">
      <div class="input-field col s12 m6">
       <input class="mb-0" id="form-name" type="text">
       <label for="form-name">Form Name</label>
      </div>
      <div class="input-field col s12 m6">
       <input class="mb-0" id="number-of-inputs" type="number">
       <label for="number-of-inputs">Number of inputs</label>
      </div>
     </div>
    </div>
    <section id="inputs">
     <h6 class="grey-text text-darken-1 mt-lg">Inputs Informations</h6>
     <div class="card">
      <div class="row mb-0">
       <div class="input-field col s12 m4">
        <input class="mb-0" id="input-name" type="text">
        <label for="input-name">Input Name</label>
       </div>
       <div class="input-field col s12 m4">
        <select>
         <option value="" disabled selected>Input Type</option>
         <option value="email">Email</option>
         <option value="password">Password</option>
         <option value="text">Text</option>
         <option value="number">Number</option>
        </select>
       </div>
       <div class="input-field col s12 m4">
        <p>
         <label>
          <input type="checkbox">
          <span>Required</span>
         </label>
        </p>
       </div>
      </div>
     </div>
    </section>
   </div>
   <div class="col s12 l6">
    <div class="card" id="code-card">
     <div class="card-tabs">
      <ul class="tabs tabs-fixed-width" id="codeTabs">
       <li class="tab"><a class="grey-text" href="#preview"><span class="fa fa-eye blue-text"></span> Preview</a>
       </li>
       <li class="tab"><a class="active grey-text text-darken-2" href="#template"><span
          class="fab fa-html5 orange-text"></span> Template</a></li>
       <li class="tab"><a class="grey-text text-darken-2" href="#controller"><span
          class="fab fa-js yellow-text"></span> Controller</a></li>
      </ul>
     </div>
     <div class="card-content grey lighten-4 h-100">
      <div id="preview">
       1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ut autem ratione nobis delectus
       illo molestiae vero, voluptates ducimus voluptatum quae mollitia doloremque magnam? Dicta natus deleniti
       excepturi alias. Quidem.
      </div>
      <div id="template">
       <pre><code class="html" id="html-code"></code></pre>
      </div>
      <div id="controller">
       <pre><code class="typescript" id="typescript-code"></code></pre>
      </div>
     </div>
    </div>
   </div>
  </div>
 </section>
</body>
</html>`;