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
        'I operated several ice cream parlors in and around Munich. ' +
        'Then I switched to the work as a sales representative for a wholesaler and work there since 2 years.'
    },
    {
      'icon': 'fas fa-graduation-cap',
      'headline': 'STUDIES',
      'description': 'In 2018 I started studying business informatics alongside my job. ' +
        'During my studies I came into contact with topics such as digitization and software engineering. ' +
        'This is where I discovered my passion for programming. ' +
        'In 2021 I graduated with a Bachelor of Science. ' +
        'Then I visited an institution in Munich to develop myself further in front end development.'
    },
    {
      'icon': 'far fa-heart',
      'headline': 'MY STRENGTHS',
      'description': 'I can work independently as well as in a team. ' +
        'I am also creative and have a logical way of thinking. ' +
        'I am characterized by a high threshold of frustration and mental resilience.'
    },
    {
      'icon': 'fas fa-search',
      'headline': 'MY PROFESSIONAL FUTURE',
      'description': 'After my studies and further training in front-end development, ' +
        'I am now looking for new challenges.'
    }
  ]
  constructor() { }



  ngOnInit(): void {
  }
}
