import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-projects',
  templateUrl: './angular-projects.component.html',
  styleUrls: ['./angular-projects.component.scss']
})
export class AngularProjectsComponent implements OnInit {

  works = [

    {
      'id': 'ring-of-fire',
      'image': 'assets/img/smartmockups_ringoffire.jpg',
      'id2': 'ring-of-fire-overlay',
      'name': 'Ring of Fire',
      'description': 'A famous card game where the players must drink.' +
        'Build with Angular framework and a firebase database.' +
        'A multiplayer mode is implemented.',
      'link': 'http://adriano-parente.de/ring-of-fire',
      'alt': 'ring of fire'
    },

    {
      'id': 'simple_crm',
      'image': 'assets/img/smartmockups_crm.jpg',
      'id2': 'simple_crm-overlay',
      'name': 'Simple CRM',
      'description': ' A simple CRM system, built with Angular and a firebase database.',
      'link': 'http://adriano-parente.de/simple_crm/',
      'alt': 'simple crm'
    },

    {
      'id': 'homepage',
      'image': 'assets/img/construction.png',
      'id2': 'homepage-overlay',
      'name': 'Homepage',
      'description': 'My personal homepage' ,
      'link': 'http://adriano-parente.de',
      'alt': 'homepage'
    }

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
    let homepageOverlay = <HTMLElement>document.getElementById('homepage-overlay');
    
    if (i == 'simple_crm') {
      simpleCrmOverlay.classList.remove('d-none');
    } else if (i == 'ring-of-fire') {
      ringOfFireOverlay.classList.remove('d-none')
    } else if (i == 'homepage') {
      homepageOverlay.classList.remove('d-none')
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
    let homepageOverlay = <HTMLElement>document.getElementById('homepage-overlay');

    if (i == 'simple_crm') {
      simpleCrmOverlay.classList.add('d-none')
    } else if (i == 'ring-of-fire') {
      ringOfFireOverlay.classList.add('d-none')
    } else if (i == 'homepage') {
      homepageOverlay.classList.add('d-none')
    } 
  }
}
