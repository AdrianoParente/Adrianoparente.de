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
    let project2 =  <HTMLElement>document.getElementById('project2');
    let project3 =  <HTMLElement>document.getElementById('project3');
    let project4 =  <HTMLElement>document.getElementById('project4');
    let all = <HTMLElement>document.getElementById('all');
    let angular = <HTMLElement>document.getElementById('angular');
    let javascript = <HTMLElement>document.getElementById('javascript');
  
    if (string == 'All') {
      all.classList.add('activated');
      angular.classList.remove('activated');
      javascript.classList.remove('activated');
      elPolloLoco.style.display = 'flex';
      project2.style.display = 'flex';
      project3.style.display = 'flex';
      project4.style.display = 'flex';

    } else if (string == 'Angular') {
      all.classList.remove('activated');
      angular.classList.add('activated');
      javascript.classList.remove('activated');
      elPolloLoco.style.display = 'none';
      project2.style.display = 'none';
      project3.style.display = 'flex';
      project4.style.display = 'flex';

    } else if (string == 'JavaScript') { 
      all.classList.remove('activated');
      angular.classList.remove('activated');
      javascript.classList.add('activated');
      elPolloLoco.style.display = 'flex';
      project2.style.display = 'flex';
      project3.style.display = 'none';
      project4.style.display = 'none';
    }

  }

}
