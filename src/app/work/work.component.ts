import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  all = true;
  javascript = false;
  angular = false;

  showAll() {    
    this.all = true;
    this.javascript = false;
    this.angular = false;
  }

  showJavascript() {   
    this.javascript = true;
    this.angular = false;
    this.all = false;
  }

  showAngular() {    
    this.javascript = false;    
    this.angular = true;
    this.all = false;
  }
}
