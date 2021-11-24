import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  buttons = [
    {
      'id': 'all',
      'activated': 'activated',
      'click': 'All',
      'name': 'All'
    },
    {
      'id': 'angular',
      'activated': '',
      'click': 'Angular',
      'name': 'Angular'
    },
    {
      'id': 'javascript',
      'activated': '',
      'click': 'JavaScript',
      'name': 'Java Script'
    },
  ]

  works = [
    {
      'id': 'el-pollo-loco',
      'image': 'assets/img/Opción 1.png',
      'id2': 'el-pollo-loco-overlay',
      'name': 'El Pollo Loco',
      'description': 'A javascript based jump and run game like Super Mario.' +
        'Let the little mexican guy Pepe collect coins and bottles, ' +
        'but take care of the chickens and throw the bottles ' +
        'to fight against the final boss "El pollo loco".',
      'link': 'http://adriano-parente.de/el-pollo-loco/'
    },
    {
      'id': 'ring-of-fire',
      'image': 'assets/img/RingOfFire.jpg',
      'id2': 'ring-of-fire-overlay',
      'name': 'Ring of Fire',
      'description': 'A famous card game where the players must drink.' +
        'Build with Angular framework and a firebase database.' +
        'A multiplayer mode is implemented.',
      'link': 'http://adriano-parente.de/ring-of-fire'
    },
    {
      'id': 'call-a-icecream',
      'image': 'assets/img/Lieferando.png',
      'id2': 'call-a-icecream-overlay',
      'name': 'Call A Icecream',
      'description': ' A Lieferando clone, built with javascript. Shows how a shop-basket works.',
      'link': 'http://adriano-parente.de/call-a-icecream/'
    },
    {
      'id': 'simple_crm',
      'image': 'assets/img/crm_picture.png',
      'id2': 'simple_crm-overlay',
      'name': 'Simple CRM',
      'description': ' A simple CRM system, built with Angular and a firebase database.',
      'link': 'http://adriano-parente.de/simple_crm/'
    },
  ]
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

  /**
   * 
   * shows the overlay 
   * @param i name of the clicked project as a string
   */
  showOverlay(i: string) {
    let simpleCrmOverlay = <HTMLElement>document.getElementById('simple_crm-overlay');
    let ringOfFireOverlay = <HTMLElement>document.getElementById('ring-of-fire-overlay');
    let elPolloLocoOverlay = <HTMLElement>document.getElementById('el-pollo-loco-overlay');
    let callAIcecreamOverlay = <HTMLElement>document.getElementById('call-a-icecream-overlay');
    if (i == 'simple_crm') {
      simpleCrmOverlay.classList.remove('d-none');
    } else if (i == 'ring-of-fire') {
      ringOfFireOverlay.classList.remove('d-none')
    } else if (i == 'el-pollo-loco') {
      elPolloLocoOverlay.classList.remove('d-none')
    } else if (i == 'call-a-icecream') {
      callAIcecreamOverlay.classList.remove('d-none')
    }
  }

  /**
   * 
   * hides the overlay 
   * @param i name of the clicked project as a string
   */
  hideOverlay(i: string) {
    let simpleCrmOverlay = <HTMLElement>document.getElementById('simple_crm-overlay');
    let ringOfFireOverlay = <HTMLElement>document.getElementById('ring-of-fire-overlay');
    let elPolloLocoOverlay = <HTMLElement>document.getElementById('el-pollo-loco-overlay');
    let callAIcecreamOverlay = <HTMLElement>document.getElementById('call-a-icecream-overlay');

    if (i == 'simple_crm') {
      simpleCrmOverlay.classList.add('d-none')
    } else if (i == 'ring-of-fire') {
      ringOfFireOverlay.classList.add('d-none')
    } else if (i == 'el-pollo-loco') {
      elPolloLocoOverlay.classList.add('d-none')
    } else if (i == 'call-a-icecream') {
      callAIcecreamOverlay.classList.add('d-none')
    }
  }
}
