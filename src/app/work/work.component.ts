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
    let elPolloLoco = <HTMLElement>document.getElementById('el-pollo-loco');
    let ringOfFire = <HTMLElement>document.getElementById('ring-of-fire');
    let callAIcecream = <HTMLElement>document.getElementById('call-a-icecream');
    let simpleCrm = <HTMLElement>document.getElementById('simple_crm');
    let all = <HTMLElement>document.getElementById('all');
    let angular = <HTMLElement>document.getElementById('angular');
    let javascript = <HTMLElement>document.getElementById('javascript');

    if (string == 'All') {
      this.isAll(elPolloLoco, ringOfFire, callAIcecream, simpleCrm, all, angular, javascript)

    } else if (string == 'Angular') {
      this.isAngular(elPolloLoco, ringOfFire, callAIcecream, simpleCrm, all, angular, javascript)

    } else if (string == 'JavaScript') {
      this.isJavaScript(elPolloLoco, ringOfFire, callAIcecream, simpleCrm, all, angular, javascript)
    }

  }

  /**
   * all projects are displayed
   * 
   * @param elPolloLoco HTML element
   * @param ringOfFire HTML element
   * @param callAIcecream HTML element
   * @param simpleCrm HTML element
   * @param all HTML element
   * @param angular HTML element
   * @param javascriptHTML element 
   */
  isAll(elPolloLoco: any, ringOfFire: any, callAIcecream: any, simpleCrm: any, all: any, angular: any, javascript: any) {
    all.classList.add('activated');
    angular.classList.remove('activated');
    javascript.classList.remove('activated');
    elPolloLoco.style.display = 'flex';
    ringOfFire.style.display = 'flex';
    callAIcecream.style.display = 'flex';
    simpleCrm.style.display = 'flex';
  }

  /**
   * only angular projects are displayed
   * 
   * @param elPolloLoco HTML element
   * @param ringOfFire HTML element
   * @param callAIcecream HTML element
   * @param simpleCrm HTML element
   * @param all HTML element
   * @param angular HTML element
   * @param javascriptHTML element 
   */
  isAngular(elPolloLoco: any, ringOfFire: any, callAIcecream: any, simpleCrm: any, all: any, angular: any, javascript: any) {
    all.classList.remove('activated');
    angular.classList.add('activated');
    javascript.classList.remove('activated');
    elPolloLoco.style.display = 'none';
    ringOfFire.style.display = 'flex';
    callAIcecream.style.display = 'none';
    simpleCrm.style.display = 'flex';
  }

  /**
   * only javascript projects are displayed
   * 
   * @param elPolloLoco HTML element
   * @param ringOfFire HTML element
   * @param callAIcecream HTML element
   * @param simpleCrm HTML element
   * @param all HTML element
   * @param angular HTML element
   * @param javascriptHTML element 
   */
  isJavaScript(elPolloLoco: any, ringOfFire: any, callAIcecream: any, simpleCrm: any, all: any, angular: any, javascript: any) {
    all.classList.remove('activated');
    angular.classList.remove('activated');
    javascript.classList.add('activated');
    elPolloLoco.style.display = 'flex';
    ringOfFire.style.display = 'none';
    callAIcecream.style.display = 'flex';
    simpleCrm.style.display = 'none';
  }
}
