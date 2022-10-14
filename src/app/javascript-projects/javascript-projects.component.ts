import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript-projects',
  templateUrl: './javascript-projects.component.html',
  styleUrls: ['./javascript-projects.component.scss']
})
export class JavascriptProjectsComponent implements OnInit {

  works = [
    {
      'id': 'el-pollo-loco',
      'image': 'assets/img/smartmockups_elpolloloco.jpg',
      'id2': 'el-pollo-loco-overlay',
      'name': 'El Pollo Loco',
      'description': 'A javascript based jump and run game like Super Mario.' +
        'Let the little mexican guy Pepe collect coins and bottles, ' +
        'but take care of the chickens and throw the bottles ' +
        'to fight against the final boss "El pollo loco".',
      'link': 'http://adriano-parente.de/el-pollo-loco/',
      'alt': 'el pollo loco'
    },
    {
      'id': 'call-a-icecream',
      'image': 'assets/img/smartmockups_lieferando.jpg',
      'id2': 'call-a-icecream-overlay',
      'name': 'Call A Icecream',
      'description': ' A Lieferando clone, built with javascript. Shows how a shop-basket works.',
      'link': 'http://adriano-parente.de/call-a-icecream/',
      'alt': 'call a icecream'
    },

    {
      'id': 'recipe',
      'image': 'assets/img/construction.png',
      'id2': 'recipe-overlay',
      'name': 'Recipe',
      'description': 'A Kochwelt clone' ,
      'link': 'http://adriano-parente.de',
      'alt': 'recipe'
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
    let elPolloLocoOverlay = <HTMLElement>document.getElementById('el-pollo-loco-overlay');
    let callAIcecreamOverlay = <HTMLElement>document.getElementById('call-a-icecream-overlay');
    let recipeOverlay = <HTMLElement>document.getElementById('recipe-overlay');
    
    if (i == 'el-pollo-loco') {
      elPolloLocoOverlay.classList.remove('d-none')
    } else if (i == 'call-a-icecream') {
      callAIcecreamOverlay.classList.remove('d-none')
    } else if (i == 'recipe') {
      recipeOverlay.classList.remove('d-none')
    } 
  }

  /**
   * 
   * hides the overlay 
   * @param i name of the clicked project as a string
   */
  hideOverlay(i: string) {
    let elPolloLocoOverlay = <HTMLElement>document.getElementById('el-pollo-loco-overlay');
    let callAIcecreamOverlay = <HTMLElement>document.getElementById('call-a-icecream-overlay');
    let recipeOverlay = <HTMLElement>document.getElementById('recipe-overlay');
    

    if (i == 'el-pollo-loco') {
      elPolloLocoOverlay.classList.add('d-none')
    } else if (i == 'call-a-icecream') {
      callAIcecreamOverlay.classList.add('d-none')
    } else if (i == 'recipe') {
      recipeOverlay.classList.add('d-none')
    } 
  }
}
