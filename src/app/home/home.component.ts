import { Component, OnInit } from '@angular/core';
import { ChangeClassesDirective } from '../change-classes.directive';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  salutationArray: string[] = ['H', 'i', ','];
  introductionArray: string[] = ['I', "'", 'm'];
  nameArray: string[] = ['A', 'd', 'r', 'i', 'a', 'n', 'o'];
  jobArray1: string[] = ['F', 'r', 'o', 'n', 't'];
  jobArray2: string[] = ['E', 'n', 'd'];
  jobArray3: string[] = ['D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];
  
  constructor() { }

  ngOnInit(): void {
  } 
  
}
  

