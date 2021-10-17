import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  /**
   * proves if all fields are filled up, if yes it submits the form
   */
  submitForm() {
    let inputName = <HTMLInputElement>document.getElementById('inputName');
    let inputEmail = <HTMLInputElement>document.getElementById('inputEmail');
    let inputMessage = <HTMLInputElement>document.getElementById('inputMessage');
    if (inputName.value == '') {
      inputName.classList.add('borderRed');
      if (inputEmail.value == '') {
        inputEmail.classList.add('borderRed');
        if (inputMessage.value == '') {
          inputMessage.classList.add('borderRed');
        }
      }
    }
    else
      document.forms[0].submit();
  }
}
