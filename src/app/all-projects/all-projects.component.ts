import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss']
})
export class AllProjectsComponent implements OnInit {
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
      'id': 'call-a-icecream',
      'image': 'assets/img/Lieferando.png',
      'id2': 'call-a-icecream-overlay',
      'name': 'Call A Icecream',
      'description': ' A Lieferando clone, built with javascript. Shows how a shop-basket works.',
      'link': 'http://adriano-parente.de/call-a-icecream/'
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
