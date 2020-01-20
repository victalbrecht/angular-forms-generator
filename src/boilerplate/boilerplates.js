export const templateBoilerplate = 
`<form [formGroup]="{{formName}}" (ngSubmit)="{{formName}}Submit({{formName}}.value)">
  {{#each inputList}}
  <div class="form-group">
    <label for="{{name}}">{{rawName}}</label>
    <input type="{{type}}" class="form-control" id="{{name}}" formControlName="{{name}}">
  </div>
  {{/each}}
  <button type="submit" class="btn btn-primary" [disabled]="!{{formName}}.valid">Send</button>
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
  public {{formName}}: FormGroup;

  constructor(private fb: FormBuilder) { }

  public {{formName}}Submit = ({{formName}}Value: any): void => { };

  ngOnInit() { 
    this.{{formName}} = this.fb.group({
      {{#each inputList}}
        {{name}}: ['',  []],
      {{/each}}
    });
  }
}`;

export const inputCardBoilerplate = 
`<div class="card" id="input-card-{{inputCardId}}">
<div class="row mb-0 inputs-informations-card">
  <div class="input-field col s12 m4">
    <input class="mb-0" id="input-name" type="text" autocomplete="off">
    <label for="input-name">Input name</label>
  </div>
  <div class="input-field col s12 m4">
    <select autocomplete="off">
      <option value="" disabled selected>Input type</option>
      <option value="email">Email</option>
      <option value="password">Password</option>
      <option value="text">Text</option>
      <option value="number">Number</option>
    </select>
  </div>
  <div class="input-field col s12 m4">
    <p>
      <label>
        <input type="checkbox" autocomplete="off">
        <span>Required</span>
      </label>
    </p>
  </div>
  <a class="btn-floating btn-small waves-effect waves-light red" onclick="deleteInputCard({{inputCardId}})"><span class="fa fa-times"></span></a>
</div>
</div>`;