import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { MainComponent } from './main/main.component';
import { InViewportModule } from '@thisissoon/angular-inviewport';
import { AngularProjectsComponent } from './angular-projects/angular-projects.component';
import { JavascriptProjectsComponent } from './javascript-projects/javascript-projects.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    SkillsComponent,
    WorkComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    ImprintComponent,
    DataProtectionComponent,
    MainComponent,
    AngularProjectsComponent,
    JavascriptProjectsComponent,
    AllProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InViewportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
