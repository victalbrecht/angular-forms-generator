import hljs from 'highlight.js/lib/index';
import * as mat from 'materialize-css/dist/js/materialize.min';

document.addEventListener('DOMContentLoaded', () =>  {
  mat.FormSelect.init(document.querySelectorAll('select'));

  mat.Tabs.init(document.getElementById('codeTabs'));

  hljs.initHighlightingOnLoad();
  
  document.getElementById('html-code').innerText = 
`<form [formGroup]="formName" (ngSubmit)="formNameSubmit(formName.value)">
  <div class="form-group">
    <label for="inputName1">Input Name 1</label>
    <input type="type" class="form-control" id="inputName1" formControlName="inputName1">
  </div>
  <div class="form-group">
    <label for="inputName2">Input Name 2</label>
    <input type="type" class="form-control" id="inputName2" formControlName="inputName2">
  </div>
  <button type="submit" class="btn btn-primary">Send</button>
</form>`;

  document.getElementById('typescript-code').innerText =
`public formName: FormGroup = new FormGroup({
  inputName1: new FormControl('valueInputName1'),
  inputName2: new FormControl('valueInputName2')
});

public formNameSubmit = (formValue: any): void => {
  /* 
    your submit code here 
  */
};`;
});