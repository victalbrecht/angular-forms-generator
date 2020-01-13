export const templateBoilerplate = 
`<form [formGroup]="{{formName}}" (ngSubmit)="{{formName}}Submit({{formName}}.value)">
  <div class="form-group">
    <label for="inputName1">Input Name 1</label>
    <input type="type" class="form-control" id="inputName1" formControlName="inputName1">
  </div>
  <div class="form-group">
    <label for="inputName2">Input Name 2</label>
    <input type="type" class="form-control" id="inputName2" formControlName="inputName2">
  </div>
  <button type="submit" class="btn btn-primary" [disabled]="!{{formName}}.valid">Send</button>
</form>`;

export const controllerBoilerplate = 
`import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: "app-name",
  templateUrl: "./name.component.html",
  styleUrls: ["./name.component.css"]
})
export class NameComponent implements OnInit {
  public formName: FormGroup;

  constructor(private fb: FormBuilder) { }

  public formNameSubmit = (formValue: any): void => {
    /* 
      your submit code here 
    */
  };

  ngOnInit() { 
    this.formName = this.fb.group({
      inputName1: ['',  [Validators.required, Validators.email]],
      inputName2: ['', [Validators.required]]
    });
  }
}`;