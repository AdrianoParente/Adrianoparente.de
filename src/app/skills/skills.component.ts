import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit, AfterViewInit {
  skillNameArray1: string[] = ['M', 'y'];
  skillNameArray2: string[] = ['S', 'k', 'i', 'l', 'l', 's'];

  constructor() {}
  ngAfterViewInit(): void {
    setTimeout(() => {console.log('hello');
      const script = document.createElement('script');
      script.src = '../../script.js';
      document.body.appendChild(script); console.log(script);
      const scriptj = document.createElement('scriptj');
      script.src = '../../jscript.js';
      document.body.appendChild(scriptj);
    }, 500);
  }

  ngOnInit(): void {}
}
