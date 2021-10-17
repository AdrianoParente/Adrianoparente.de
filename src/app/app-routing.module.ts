import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainComponent } from './main/main.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';


const routes: Routes = [
  {path:'', component:MainComponent},
  {path:'imprint', component:ImprintComponent},
  {path:'data-protection', component:DataProtectionComponent},
  {path:'about', component:AboutComponent},
  {path:'skills', component:SkillsComponent},
  {path:'contact', component:ContactComponent},
  {path:'work', component:WorkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
