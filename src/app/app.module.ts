import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout/flexbox';

import { AppComponent } from './app.component';
import { InfoService } from './service/info.service';
import { AppManager } from './service/app-manager.service';
import { ShowInfo } from './show-info-component/show-info.component';
import { SidenavMenue } from './sidenav-menu.component/sidenav-menue.component';
import { StartContent } from './start-content.component/start-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowInfo,
    SidenavMenue,
    StartContent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule
  ],
  providers: [
    InfoService,
    AppManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
