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

 /**
  * check which button is clicked and display the right category works
  * @param string name of button
  */

  showProjects(string: string) {
    let elPolloLoco  = <HTMLElement>document.getElementById('el-pollo-loco');
    let ringOfFire =  <HTMLElement>document.getElementById('ring-of-fire');
    let callAIcecream =  <HTMLElement>document.getElementById('call-a-icecream');
    let simpleCrm =  <HTMLElement>document.getElementById('simple_crm');
    let all = <HTMLElement>document.getElementById('all');
    let angular = <HTMLElement>document.getElementById('angular');
    let javascript = <HTMLElement>document.getElementById('javascript');
  
    if (string == 'All') {
      all.classList.add('activated');
      angular.classList.remove('activated');
      javascript.classList.remove('activated');
      elPolloLoco.style.display = 'flex';
      ringOfFire.style.display = 'flex';
      callAIcecream.style.display = 'flex';
      simpleCrm.style.display = 'flex';

    } else if (string == 'Angular') {
      all.classList.remove('activated');
      angular.classList.add('activated');
      javascript.classList.remove('activated');
      elPolloLoco.style.display = 'none';
      ringOfFire.style.display = 'flex';
      callAIcecream.style.display = 'none';
      simpleCrm.style.display = 'flex';

    } else if (string == 'JavaScript') { 
      all.classList.remove('activated');
      angular.classList.remove('activated');
      javascript.classList.add('activated');
      elPolloLoco.style.display = 'flex';
      ringOfFire.style.display = 'none';
      callAIcecream.style.display = 'flex';
      simpleCrm.style.display = 'none';
    }

  }

}
