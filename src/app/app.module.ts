import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Erro404Component } from './404/erro-404.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { TimelineComponent } from './timeline/timeline.component';

import { NavBarComponent } from './header/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContatoComponent } from './contato/contato.component';
import { DownloadcvComponent } from './shared/component/downloadcv/downloadcv.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [		
    AppComponent,
    NavBarComponent,
    FooterComponent,
    Erro404Component,
    BodyComponent,
    TimelineComponent,
    SkillsComponent,
    ContatoComponent,
    DownloadcvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
