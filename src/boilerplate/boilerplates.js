export const templateBoilerplate = 
`<form [formGroup]="{{camelize formName}}Form" (ngSubmit)="{{camelize formName}}FormSubmit({{camelize formName}}Form.value)">
  {{#each inputList}}
  <div class="form-group">
    <label for="{{camelize name}}">{{name}}</label>
    <input type="{{camelize type}}" class="form-control" id="{{camelize name}}" formControlName="{{camelize name}}"{{#if required}} required{{/if}}>
  </div>
  {{/each}}
  <button type="submit" class="btn btn-primary mt-2" [disabled]="!{{camelize formName}}Form.valid">Send</button>
</form>`;

export const controllerBoilerplate = 
`import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder{{hasReactiveValidators inputList}} } from '@angular/forms';

import { {{capitalize (camelize formName)}} } from './{{kebabize formName}}.model.ts';

@Component({
  selector: 'app-{{kebabize componentName}}',
  templateUrl: './{{kebabize componentName}}.component.html',
  styleUrls: ['./{{kebabize componentName}}.component.{{stylesheetLanguage}}']
})
export class {{capitalize (camelize componentName)}}Component implements OnInit {
  public {{camelize formName}}Form: FormGroup;

  constructor(private fb: FormBuilder) { }

  public {{camelize formName}}FormSubmit = ({{camelize formName}}FormValue: {{capitalize (camelize formName)}}): void => { };

  ngOnInit() { 
    this.{{camelize formName}}Form = this.fb.group({
      {{#each inputList}}
      {{camelize name}}: {{{getReactiveValidators this}}}{{#unless @last}},{{/unless}}
      {{/each}}
    });
  }
}`;

export const modelBoilerplate =
`export class {{capitalize (camelize formName)}} {
  constructor (
    {{#each inputList}}
    public {{camelize name}}: {{getTypeScriptType (camelize type)}}{{#unless @last}},{{/unless}}
    {{/each}}
  ) { }
}`;

export const inputCardBoilerplate = 
`<div class="card slide-from-left" id="input-card-{{inputCardId}}">
<div class="row mb-0 inputs-informations-card">
  <div class="input-field col s12 m4">
    <input class="mb-0" id="input-name-{{inputCardId}}" type="text" autocomplete="off" onkeyup="refreshBoilerplateData()">
    <label for="input-name-{{inputCardId}}">Input name</label>
  </div>
  <div class="input-field col s12 m4">
    <select autocomplete="off" onchange="refreshBoilerplateData()">
      <option value="text" selected>Text</option>
      <option value="email">Email</option>
      <option value="password">Password</option>
      <option value="number">Number</option>
    </select>
    <label>Input type</label>
  </div>
  <div class="input-field col s12 m4">
    <p>
      <label>
        <input type="checkbox" autocomplete="off" onchange="refreshBoilerplateData()">
        <span>Required</span>
      </label>
    </p>
  </div>
  <a class="btn-floating btn-small waves-effect waves-light red" onclick="deleteInputCard({{inputCardId}})"><span class="fa fa-times"></span></a>
</div>
</div>`;