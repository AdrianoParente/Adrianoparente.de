import { getCurrencySymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  stories = [
    {
      'icon': 'fas fa-walking',
      'headline': 'MY PROFESSIONAL PAST',
      'description': 'I was self-employed in the catering industry for over 20 years. ' +
        'Then I switched to the work as a sales representative for a wholesaler and work there since 2 years.'
    },
    {
      'icon': 'fas fa-graduation-cap',
      'headline': 'STUDIES',
      'description': 'In 2021 I graduated with a Bachelor of Science in business informatics. ' +
        'Then I visited an institution in Munich to develop myself further in front end development.'
    },
    {
      'icon': 'far fa-heart',
      'headline': 'MY STRENGTHS',
      'description': 'I work independently as well as in a team, ' +
        'creative and have a logical way of thinking. ' +
        'I am characterized by a high threshold of frustration and mental resilience.'
    },
    {
      'icon': 'fas fa-search',
      'headline': 'MY PROFESSIONAL PRESENT',
      'description': 'Now I work as a junior software developer.'
    }
  ]
  constructor() { }



  ngOnInit(): void {
  }
}
