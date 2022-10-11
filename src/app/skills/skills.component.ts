import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillNameArray1:string[] = ['M','y'];
  skillNameArray2:string[] = ['S','k','i','l','l','s'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
