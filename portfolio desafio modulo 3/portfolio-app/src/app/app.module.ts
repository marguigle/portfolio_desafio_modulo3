import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ExpLaboralComponent } from './exp-laboral/exp-laboral.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioService } from './servicios/portfolio.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ExpLaboralComponent,
    EstudiosComponent,
    SkillsComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [PortfolioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
