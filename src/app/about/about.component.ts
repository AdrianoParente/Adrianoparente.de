import { getCurrencySymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutNameArray1: string[] = ['A', 'b', 'o', 'u', 't'];
  aboutNameArray2: string[] = ['m', 'e'];
  stories = [
    {
      'icon': 'fas fa-walking',
      'headline': 'MY PROFESSIONAL PAST',
      'description': 'I was self-employed in the catering industry for over 20 years. ' +
        'Then I switched to the work as a sales representative for a wholesaler and worked there for 2 years.'
    },
    {
      'icon': 'fas fa-graduation-cap',
      'headline': 'STUDIES',
      'description': 'In 2021 I graduated with a Bachelor of Science in business informatics. ' +
        'Then I visited an institution in Munich to develop myself further in front end development.' +
        'After that I continued studying business informatics for a Master degree, which I will achieve in 2023.'
    },
    {
      'icon': 'far fa-heart',
      'headline': 'MY STRENGTHS',
      'description': 'I work independently as well as in a team. ' +
        'I have a logical way of thinking. ' +
        'I am characterized by a high threshold of frustration, mental resilience and creativity.'
    },
    {
      'icon': 'fas fa-search',
      'headline': 'MY PROFESSIONAL PRESENT',
      'description': 'Since 2022 I work as a junior software developer.'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
}
