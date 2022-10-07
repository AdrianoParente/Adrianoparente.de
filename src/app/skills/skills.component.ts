import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillNameArray1:string[] = ['M','y'];
  skillNameArray2:string[] = ['S','k','i','l','l','s'];
  skills = [
    {
      'name': 'Java script',
      'image': 'assets/img/icons8-javascript-logo-64.png'
    },
    {
      'name': 'HTML/ CSS',
      'image': 'assets/img/Group 205.png'
    },
    {
      'name': 'Angular',
      'image': 'assets/img/icons8-angularjs-48.png'
    },
    {
      'name': 'SCRUM',
      'image': 'assets/img/Group 226.png'
    },
    {
      'name': 'Git',
      'image': 'assets/img/Git-Icon-1788C 2.png'
    },
    {
      'name': 'Rest API',
      'image': 'assets/img/icons8-rest-api-80 2.png'
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
