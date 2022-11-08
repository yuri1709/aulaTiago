import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FotografiaModule } from './fotografia/fotografia.module';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
//verificar mudança
@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    FotografiaModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
