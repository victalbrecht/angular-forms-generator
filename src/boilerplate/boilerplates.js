export const templateBoilerplate = 
`<form [formGroup]="{{formName}}Form" (ngSubmit)="{{formName}}FormSubmit({{formName}}Form.value)">
  {{#each inputList}}
  <div class="form-group">
    <label for="{{name}}">{{rawName}}</label>
    <input type="{{type}}" class="form-control" id="{{name}}" formControlName="{{name}}"{{#if required}} required{{/if}}>
  </div>
  {{/each}}
  <button type="submit" class="btn btn-primary" [disabled]="!{{formName}}Form.valid">Send</button>
</form>`;

export const controllerBoilerplate = 
`import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: "app-{{componentName}}",
  templateUrl: "./{{componentName}}.component.html",
  styleUrls: ["./{{componentName}}.component.css"]
})
export class {{componentName}}Component implements OnInit {
  public {{formName}}Form: FormGroup;

  constructor(private fb: FormBuilder) { }

  public {{formName}}FormSubmit = ({{formName}}FormValue: any): void => { };

  ngOnInit() { 
    this.{{formName}}Form = this.fb.group({
      {{#each inputList}}
      {{name}}: ['',  [{{#if required}}Validators.required{{/if}}]],
      {{/each}}
    });
  }
}`;

export const inputCardBoilerplate = 
`<div class="card" id="input-card-{{inputCardId}}">
<div class="row mb-0 inputs-informations-card">
  <div class="input-field col s12 m4">
    <input class="mb-0" id="input-name-{{inputCardId}}" type="text" autocomplete="off" onkeyup="refreshBoilerplateData()">
    <label for="input-name-{{inputCardId}}">Input name</label>
  </div>
  <div class="input-field col s12 m4">
    <select autocomplete="off">
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