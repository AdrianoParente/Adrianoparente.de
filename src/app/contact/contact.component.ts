import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactNameArray1:string[] = ['C','o','n','t','a','c','t'];
  contactNameArray2:string[] = ['m','e','.'];

  constructor() { }

  ngOnInit(): void {
  }
  
  submitForm() {  
      document.forms[0].submit();
  }
}
