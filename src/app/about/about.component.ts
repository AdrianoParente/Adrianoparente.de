import { getCurrencySymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
  }

  /**
   * 
   * shows the text
   * @param int number of description field
   */
  showText(int: number) {
    let text = this.findField(int);
    text.classList.remove('opac');
    this.findRestField(int, '#353535')
  }


  /**
   * hide the text
   * @param int number of description field
   */
  hideText(int: number) {
    let text = this.findField(int);
    text.classList.add('opac');
    this.findRestField(int, 'white')
  }


  /**
   * 
   * @param int number of description field
   * @returns HTML object with correct number
   */
  findField(int: number): any {
    let text = <HTMLElement>document.getElementById('description-text' + int);
    return text;
  }


  /**
   * 
   * @param int number of description field
   * @param color color for the headline of the rest field
   */
  findRestField(int: number, color: string) {
    let numbers = [1, 2, 3, 4];
    let position = numbers.indexOf(int);
    numbers.splice(position, 1);
    for (let i = 0; i < numbers.length; i++) {
      let headline = <HTMLElement>document.getElementById('description-headline' + numbers[i]);
      headline.style.color = color;
    }
  }
}
