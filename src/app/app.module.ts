import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { InfoService } from './service/info.service';
import { AppManager } from './service/app-manager.service';
import { ShowInfo } from './show-info-component/show-info.component';
import { Sidenav } from './sidenav.component/sidenav.component';
import { MainContent } from './main-content.component/main-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowInfo,
    Sidenav,
    MainContent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [
    InfoService,
    AppManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
