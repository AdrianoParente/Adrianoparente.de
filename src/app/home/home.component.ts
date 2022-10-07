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
  nameArray1: string[] = ['P', 'a', 'r', 'e', 'n', 't', 'e'];
  jobArray1: string[] = ['S', 'o', 'f', 't', 'w', 'a', 'r','e']; 
  jobArray2: string[] = ['D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];
  
  constructor() { }

  ngOnInit(): void {
  } 
  
}
  

